const { Model, DataTypes } = require('sequelize');

class List extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            userId: DataTypes.INTEGER,
        }, {
            sequelize
        })
    }
}

module.exports = List;