const express = require('express');
const ListRepository = require('../../repositories/ListRepository');
const ensureAuthentication = require('../../utils').ensureAuthentication;

const router = express.Router();

router.post('/', ensureAuthentication, async (req, res) => {
  const List = await ListRepository.insert(req.body.name, req.body.userId)
  res.status(200).json(List);
});

router.get('/:id', ensureAuthentication, async (req, res) => {
  const List = await ListRepository.getAllByUserId(req.params.id)
  res.status(200).json(List);
});

router.put('/', ensureAuthentication, async (req, res) => {
  const List = await ListRepository.update(req.body.id, req.body.name)
  res.status(200).json(List);
});

router.delete('/:id', ensureAuthentication, async (req, res) => {
  const ListId = await ListRepository.delete(req.params.id)
  res.status(200).json({ id: ListId });
});

module.exports = router;