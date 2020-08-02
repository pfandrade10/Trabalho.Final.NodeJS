const Task = require('../models/Task');

module.exports = {
  async getAll() {
    const tasks = await Task.findAll({order: [ ['id', 'ASC'] ] });
    return tasks.map(t => t.dataValues);
  },

  async getById(TaskId) {
    const task = await Task.findOne({ where: { id: TaskId } });
    return task ? task.dataValues : null;
  },

  async getAllByListId(ListId) {
    const tasks = await Task.findAll({ where: { listId: ListId }, order: [ ['id', 'ASC'] ]  });
    return tasks.map(t => t.dataValues);
  },

  async insert(name, listId, isDone) {
    const task = Task.create({ name, listId, isDone });
    return task ? task.dataValues : null;
  },

  async delete(TaskId) {
    const task = await Task.findOne({ where: { id: TaskId } });
    if(task)
      await task.destroy();
    return task ? task.dataValues : null;
  },

  async update(TaskId, name, isDone) {
    const oldTask = await Task.findOne({ where: { id: TaskId } });;
    if(oldTask){
      oldTask.name = name;
      oldTask.isDone = isDone;
      await oldTask.save();
    }
    return oldTask ? oldTask.dataValues : null;
  },
};