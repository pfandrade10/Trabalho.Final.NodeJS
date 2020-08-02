const express = require('express');
const UserRepository = require('../../repositories/UserRepository');
const ensureAuthentication = require('../../utils').ensureAuthentication;

const router = express.Router();

router.post('/', ensureAuthentication, async (req, res) => {
  const user = await UserRepository.insert(req.body.name, req.body.email)
  res.status(200).json(user);
});

router.get('/', ensureAuthentication, async (req, res) => {
  const users = await UserRepository.getAll()
  res.status(200).json(users);
});

router.get('/:id', ensureAuthentication, async (req, res) => {
  const user = await UserRepository.getById(req.params.id)
  res.status(200).json(user);
});

router.put('/', ensureAuthentication, async (req, res) => {
  const user = await UserRepository.update(req.body)
  res.status(200).json(user);
});

router.delete('/:id', ensureAuthentication, async (req, res) => {
  const userId = await UserRepository.delete(req.params.id)
  res.status(200).json({ id: userId });
});

module.exports = router;