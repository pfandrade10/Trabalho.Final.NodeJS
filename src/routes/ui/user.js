const express = require('express');
const ensureAuthentication = require('../../utils').ensureAuthentication;
const UserRepository = require('../../repositories/UserRepository');
const ListRepository = require('../../repositories/ListRepository');


const router = express.Router();

router.get('/', ensureAuthentication, async (req, res) => {
    // Pega informações do Objeto Usuario e retorna para quem fez o Login junto das listas do usuario
    let user, primaryEmail, lists;
    primaryEmail = req.user.emails.find(email => email.primary === true);
    user = await UserRepository.getByEmail(primaryEmail.value);
    if(!user)
        user = await UserRepository.insert(req.user.username, primaryEmail.value)
    lists = await ListRepository.getAllByUserId(user.id);
    res.render('lists' , {user, lists});
});

module.exports = router;