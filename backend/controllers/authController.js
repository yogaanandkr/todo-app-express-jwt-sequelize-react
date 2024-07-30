const db = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()


exports.register = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await db.User.create({ username, password })
        res.status(200).json({ message: 'User registered successfully' })
    }
    catch (err) {
        res.status(500).json({ message: 'user registrarion failed ', error: err.message })
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body
    console.log(`req.body ${username} ${password}`);
    try {
        const user = await db.User.findOne({ where: { username } })
        // console.log(`this is found user ${JSON.stringify(user)}`);
        if (!user) return res.status(404).json({ message: 'user not found' })

        const validPassword = await bcrypt.compare(password, user.password)
        if (!validPassword) return res.status(400).json({ message: 'Invalid password' })

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
        console.log('got token successfully');
        // console.log(`This is req.user.id  ${req.user.id}`);
        // res.header('Authorization', token).json({ message: 'Login successful', token });
        res.status(200).json({ message: 'Login successful', token, username: user.username, userid: user.id });
    }
    catch (err) {
        res.status(500).json({ message: 'Login failed', error: err.message })
    }
}