import { Sequelize } from 'sequelize';
const databaseConfig = require('../config/database');

import User from '../models/User'
import List from '../models/List'
import Task from '../models/Task'


const connection = new Sequelize(databaseConfig);

User.init(connection);
List.init(connection);
Task.init(connection);

module.exports = connection;