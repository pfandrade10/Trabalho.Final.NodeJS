const List = require('../models/List');

module.exports = {
  async getAll() {
    const lists = await List.findAll({order: [ ['id', 'ASC'] ] });
    return lists.map(l => l.dataValues)
  },

  async getById(ListId) {
    const list = await List.findOne({ where: { id: ListId } });
    return list.dataValues;
  },

  async getAllByUserId(UserId) {
    const lists = await List.findAll({ where: { userId: UserId }, order: [ ['id', 'ASC'] ] });
    return lists.map(l => l.dataValues)
  },

  async insert(name, userId) {
    const list = await List.create({ name, userId });
    return list.dataValues
  },

  async delete(ListId) {
    const list = await List.findOne({ where: { id: ListId } });
    await list.destroy();
    return list.dataValues;
  },

  async update(ListId, name) {
    const oldList = await List.findOne({ where: { id: ListId } });;
    oldList.name = name;
    await oldList.save();
    return oldList.dataValues;
  },
};