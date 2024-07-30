const {Sequelize, DataTypes} = require("sequelize")
const config = require('../config/config.json')['development']

const sequelize = new Sequelize(
    config.database, config.username, config.password,{host: config.host, dialect: config.dialect}
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.User = require('./user')(sequelize, DataTypes)
db.Todo = require('./todo')(sequelize, DataTypes)

db.User.hasMany(db.Todo, {foreignKey: 'userId', as: 'todos'})
db.Todo.belongsTo(db.Todo, {foreignKey: 'userId', as: 'user'})

module.exports = db