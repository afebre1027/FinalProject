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

module.exports = router;
