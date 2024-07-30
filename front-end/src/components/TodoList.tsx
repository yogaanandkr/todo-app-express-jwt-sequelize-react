import React, { FC, useEffect, useState, Dispatch, SetStateAction } from 'react'
import { getTodos } from '../api/api'
import Todo from './Todo'


interface Todo {
    id: number
    title: string
    description: string
    completed: boolean
}

interface TodoFormProps {
    change: boolean;
}

const TodoList: FC<TodoFormProps> = ({ change }) => {
    const [todos, setTodos] = useState<Todo[]>([])
    const token = localStorage.getItem('token') || ''
    let [refetch, setRefetch] = useState(true)


    const fetchTodos = async () => {
        const response = await getTodos(token) || ''
        setTodos(response.data)
    }

    useEffect(() => {
        fetchTodos()
    }, [change])


    return (
        <>
            <div className='table'>

                <table className='w-100' style={{border: '2px solid black'}} rules='all' cellPadding={'20px'}>
                    <tr className='text-center'>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Completed</th>
                        <th>Delete</th>
                    </tr>

                    {todos.map(todo => (
                    <Todo key={todo.id} {...todo} onTodoUpdated={fetchTodos} />
                ))}
                </table>
                

            </div>
        </>
    )
}

export default TodoList