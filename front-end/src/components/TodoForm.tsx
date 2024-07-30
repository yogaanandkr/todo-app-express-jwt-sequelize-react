import React, { FC, FormEvent, useState, Dispatch, SetStateAction } from 'react'
import {createTodo} from '../api/api'
import TodoList from './TodoList';



const TodoForm:FC = ()=>{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const token = localStorage.getItem('token') || ''
    let [change, setChange] = useState(false)
    const handleSubmit = async (event: FormEvent) =>{
        event.preventDefault()
        await createTodo(token, title, description)
        setTitle('')
        setDescription('')
        setChange(!change)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="">Title</label>
                  <input type="text" name="" id="" className="form-control" placeholder="" onChange={(e)=>setTitle(e.target.value)}/>
                </div>

                <div className="form-group">
                  <label htmlFor="">Description</label>
                  <textarea rows={2} name="" className='form-control' id="" onChange={(e)=>setDescription(e.target.value)}></textarea>
                  {/* <input type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/> */}
                </div>

                <div className="form-group">
                    <button className='btn btn-success btn-block' type='submit'>Add Todo</button>
                </div>
            </form>

            <TodoList change={change}/>
        </>
    )
}

export default TodoForm