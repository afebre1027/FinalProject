var express = require('express'),
  router = express.Router(),
  passport = require('passport');

// GET /auth/steam

router.get(
  '/steam',
  passport.authenticate('steam', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

// GET /auth/steam/return
router.get(
  '/steam/return',
  // Issue #37 - Workaround for Express router module stripping the full url, causing assertion to fail
  function (req, res, next) {
    req.url = req.originalUrl;
    next();
  },
  passport.authenticate('steam', { failureRedirect: '/' }),
  function (req, res) {
    res.redirect('/');
  }
);

module.exports = router;
