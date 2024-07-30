const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true
        },
        completed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            },
            onDelete: 'CASCADE'

        }
    })
    return Todo
}