const express =require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')
const auth = require('../middlewares/auth')

router.post('/', auth, todoController.createTodo)
router.get('/', auth, todoController.getTodo)
router.put('/:id', auth, todoController.updateTodo)
router.delete('/:id', auth, todoController.deleteTodo)

module.exports = router