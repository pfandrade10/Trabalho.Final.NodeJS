const { Model, DataTypes } = require('sequelize');

class Task extends Model {
    static init(sequelize){
        super.init({
            idList: DataTypes.INTEGER,
            description: DataTypes.STRING,
            isCompleted: DataTypes.BOOLEAN,
            dateTimeInclusion: DataTypes.DATE
        }, {
            sequelize
        })
    }
}

module.exports = Task;