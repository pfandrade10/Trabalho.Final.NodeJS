const express = require('express');
const ensureAuthentication = require('../../utils').ensureAuthentication;
const ListRepository = require('../../repositories/ListRepository');
const TaskRepository = require('../../repositories/TaskRepository');

const router = express.Router();

router.get('/:listId', ensureAuthentication, async (req, res) => {
    console.log('listId', req.params.listId)
    let list, tasks;
    list = await ListRepository.getById(req.params.listId)
    if(!list)
        throw Error("List not found");
    tasks = await TaskRepository.getAllByListId(req.params.listId)
    res.render('tasks' , {list, tasks});
});

module.exports = router;