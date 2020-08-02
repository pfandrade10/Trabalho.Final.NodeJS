var express = require('express');
var router = express.Router();
const passport = require('passport');
const UserRepository = require('../../repositories/UserRepository');
const ListRepository = require('../../repositories/ListRepository');

/* GET GitHub authentication */

router.get('/', passport.authenticate('github'));

router.get('/callback',
  passport.authenticate('github', {failureRedirect: '/'}),
  async function (req, res) {
    // Pega informações do Objeto Usuario e retorna para quem fez o Login junto das listas do usuario
    let user, primaryEmail, lists;

    primaryEmail = req.user.emails.find(email => email.primary === true);
    user = await UserRepository.getByEmail(primaryEmail.value);
    if(!user)
      user = await UserRepository.insert(req.user.username, primaryEmail.value)
    lists = await ListRepository.getAllByUserId(user.id);
    // res.render('lists', {user, lists});
    res.redirect('/users');
  });

module.exports = router;