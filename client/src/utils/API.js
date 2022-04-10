import Express from 'express';

const app = new Express();

app.get('/steam/player/games', (req, res) => {
  let id = req.session.passport.user.match(/\d+$/)[0];
  console.log(id);
  console.log('get /steam/player/games');

  let url =
    'http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=' +
    process.env.STEAM_KEY +
    '&steamid=' +
    id +
    '&include_appinfo=1&include_played_free_games=1&format=json';
  request.get(url, (error, steamReq, steamBody) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(steamBody);
  });
});

app.get('/steam/player/friend', (req, res) => {
  let id = req.session.passport.user.match(/\d+$/)[0];
  console.log(id);
  console.log('get /steam/player');

  let url =
    'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=' +
    process.env.STEAM_KEY +
    '&steamid=' +
    id +
    '&relationship=friend';
});
