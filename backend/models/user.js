const bcrypt = require('bcryptjs')
const Sequilize = require('sequelize')

module.exports = (sequilize, DataTypes) => {
    const User = sequilize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    User.beforeCreate(async (user) => {
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)
    })
    return User;
}