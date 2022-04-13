const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
var passport = require('passport');
var session = require('express-session');
var passportSteam = require('passport-steam');
const SteamStrategy = require('./utils/passport-steam').Strategy;


// Required to get data from user for sessions
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
// Initiate Strategy
passport.use(
  new SteamStrategy(
    {
      returnURL: 'http://localhost:3000/api/auth/steam/return',
      realm: 'http://localhost:3000/',
      apiKey: '5BF49F390AD6A3E23F692965A6B9AAEA',
    },
    function (identifier, profile, done) {
      process.nextTick(function () {
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  await server.start();

  server.applyMiddleware({ app });

  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();


app.use(
  session({
    secret: 'Whatever_You_Want',
    name:'steamSignOn',
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 3600000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

app.get("/api/account", ensureAuthenticated, function(req, res) {
  res.json([{ user: req.user }]);
});

app.get("/api/ownedgames", ensureAuthenticated, function(req, res) {
  // Calculate the Steam API URL we want to use
  var url =
    "http://api.steampowered.com/IPlayerService/GetOwnedGames/" +
    "v0001/?key=" +
    '5BF49F390AD6A3E23F692965A6B9AAEA' +
    "&include_played_free_games=1&include_appinfo=1&steamid=" +
    req.user.id;
    console.log(req.user.id);
  request.get(url, function(error, steamHttpResponse, steamHttpBody) {
    var body = JSON.parse(steamHttpBody);
    res.json([{ user: req.user, gamelist: body.response }]);
  });
});

// Routes
app.get('/', (req, res) => {
  res.send(req.user);
});
app.get(
  '/api/auth/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),

);
app.get(
  '/api/auth/steam/return',
  function(req, res, next){
    req.url = req.originalUrl;
    console.log(req.url);
    next();
  },
  passport.authenticate('steam', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/steam');
    console.log(res);
  }
);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
};
