const express = require('express')
const app = express()
const db = require('./models')
const authRoutes = require('./routes/auth')
const todoRoutes = require('./routes/todo')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use('/auth', authRoutes)
app.use('/todos', todoRoutes)

const PORT = process.env.PORT || 3001

db.sequelize.sync({alter: true}).then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is running in port ${PORT}`);
    })
})