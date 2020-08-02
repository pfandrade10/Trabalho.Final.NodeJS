const User = require('../models/User');
// import User from '../models/User'

module.exports = {
  async getAll() {
    const users = await User.findAll({order: [ ['id', 'ASC'] ] });
    return users.map(u => u.dataValues)
  },

  async getById(userId) {
    const user = await User.findOne({ where: { id: userId } });
    return user ? user.dataValues : null;
  },

  async getByEmail(userEmail){
    const user = await User.findOne({ where: { email: userEmail } });
    return user ? user.dataValues : null;
  },

  async insert(name, email) {
    const user = await User.create({ name, email });
    return user ? user.dataValues : null;
  },

  async delete(userId) {
    const user = await User.findOne({ where: { id: userId } });
    if(user)
      await user.destroy();
    return user ? user.dataValues : null;
  },

  async update(user) {
    const oldUser = await User.findOne({ where: { id: user.id } });;
    if(oldUser){
      oldUser.name = user.name;
      oldUser.email = user.email;
      await oldUser.save();
    }
    return oldUser ? oldUser.dataValues : null;
  },
};