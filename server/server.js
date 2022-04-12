const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const routes = require('./routes');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');
var passport = require('passport');
var session = require('express-session');
var passportSteam = require('passport-steam');
var SteamStrategy = passportSteam.Strategy;

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
      returnURL: 'http://localhost:' + PORT + '/api/auth/steam/return',
      realm: 'http://localhost:' + PORT + '/',
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
app.use(
  session({
    secret: 'Whatever_You_Want',
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

// Routes
app.get('/', (req, res) => {
  res.send(req.user);
});
app.get(
  '/api/auth/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);
app.get(
  '/api/auth/steam/return',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
