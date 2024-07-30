import React, { FC, useState } from 'react'
import { deleteTodo, updateTodo } from '../api/api'

interface TodoProps {
    id: number
    title: string
    description: string
    completed: boolean
    onTodoUpdated: () => void
}

const Todo: FC<TodoProps> = ({ id, title, description, completed, onTodoUpdated }) => {
    let [isEdit, setIsEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(title)
    let [newDescription, setNewDescription] = useState(description)
    const token = localStorage.getItem('token') || '';

    const handleToggleCompleted = async () => {
        await updateTodo(token, id, title, description, !completed)
        onTodoUpdated()
    }

    const handleDelete = async () => {
        await deleteTodo(token, id)
        onTodoUpdated()
    }

    const handleUpdate = async()=>{
        await updateTodo(token, id, newTitle, newDescription, completed)
        setIsEdit(!isEdit)
        onTodoUpdated()
    }

    return (
        <>
            {/* <h3>{title}</h3>
            <p>{description}</p>
            <label htmlFor="">
                <input type="checkbox" checked={completed} onChange={handleToggleCompleted} name="" id="" />
                Completed
            </label>

            <button className="btn btn-danger" onClick={handleDelete}>Delete</button> */}

            {isEdit?
                <tr>
                    <td><input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)}/></td>
                    <td colSpan={2}><textarea className='w-100' name="" id="" onChange={(e)=>setNewDescription(e.target.value)}>{newDescription}</textarea></td>
                    <td><button className='btn btn-success' onClick={handleUpdate}>Update</button></td>
                </tr>
            :
            
            <tr>
                <td className='text-center'><b>{title}</b></td>
                <td>{description}</td>
                <th className='text-center'><input style={{ height: '25px', width: '25px' }} type="checkbox" checked={completed} onChange={handleToggleCompleted} name="" id="" /></th>
                <td className='text-center'><button className="btn btn-danger" onClick={handleDelete}><i className="fa fa-trash" aria-hidden="true"></i></button>
                    {/* edit button */}
                    <button className="btn btn-success" onClick={()=>setIsEdit(!isEdit)}><i className="fas fa-edit    "></i></button></td>
            </tr>
            }
        </>
    )
}

export default Todo