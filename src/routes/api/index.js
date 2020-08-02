const express = require('express');
const passport = require('passport');
const ensureAuthentication = require('../../utils').ensureAuthentication;
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {})
});

router.get('/test', ensureAuthentication , (req, res) => {
  console.log('Hi!');
  console.log(req.user);
});

// router.get('/auth/github/callback',
//   passport.authenticate('github', { failureRedirect: '/login' }),
//   (req, res) => {
//     res.redirect('/');
//   }
// );

module.exports = router;