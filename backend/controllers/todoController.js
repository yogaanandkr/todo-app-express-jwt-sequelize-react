const db = require('../models')

exports.createTodo = async (req, res) => {
    const { title, description } = req.body
    try {
        const todo = await db.Todo.create({ title, description, userId: req.user.id })
        res.status(201).json(todo)
    } catch (err) {
        res.status(500).json({ message: 'Creating todo failed', error: err.message })
    }
}

exports.getTodo = async (req, res) => {
    try {
        let todos = await db.Todo.findAll({ where: { userId: req.user.id } })
        res.json(todos)
    } catch (err) {
        res.status(500).json({ message: 'Faied fetching todos', error: err.message })
    }
}

exports.updateTodo = async (req, res) => {
    const { id } = req.params
    const { title, description, completed } = req.body
    try {
        let todo = await db.Todo.findOne({ where: { id, userId: req.user.id } })
        if (!todo) return res.status(404).json({ message: 'Todo not found' })

        todo.title = title || todo.title
        todo.description = description || todo.description
        todo.completed = completed != null ? completed : todo.completed
        await todo.save()

        res.json(todo)
    }
    catch (err) {
        res.status(500).json({ message: 'Updating todo failed', error: err.message })
    }
}

exports.deleteTodo = async (req, res) => {
    const { id } = req.params
    try {
        const todo = await db.Todo.findOne({ where: { id, userId: req.user.id } })
        if (!todo) return res.send(404).json({ message: 'cant find todo' })
        await todo.destroy()
        res.json({ message: 'Todo deleted successfully' })
    }
    catch(err){
        res.status(500).json({message: 'Deleting todo failed', error: err.message})
    }
}