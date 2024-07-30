import React, { FC, useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import Logout from '../components/Logout'

const TodoPage: FC = () => {
    let [refetch, setRefetch] = useState(true)
    useEffect(()=>{
        setRefetch(!refetch)
        console.log(refetch);
    },[])
    let username = localStorage.getItem('username')
    return (
        <>
        <span className='username'><i className="fa fa-user mr-1" aria-hidden="true"></i>{username}</span>
            <div className=" container col-12 col-md-8">
                <h2>Todos</h2>
                <TodoForm ></TodoForm>
                {/* <button onClick={()=>setRefetch(p=>!p)}>ref</button> */}
                {/* <TodoList /> */}
                <Logout/>
            </div>
        </>
    )
}

export default TodoPage