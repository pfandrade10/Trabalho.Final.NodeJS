const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            listId: DataTypes.INTEGER,
            isDone: DataTypes.BOOLEAN,
        }, {
            sequelize
        })
    }
}

module.exports = Task;