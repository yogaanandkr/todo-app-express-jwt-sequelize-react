import React, { FC, FormEvent, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { login, register } from '../api/api'
import { Link } from 'react-router-dom'

interface AuthProps{
    type: 'login' | 'register'
}

const Auth: FC<AuthProps> = ({type})=>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async(event: FormEvent)=>{
        event.preventDefault()
        try{
            if(type === 'register'){
                await register(username, password)
                alert('registration successful, please login')
                navigate('/login')
            }
            else{
                const response = await login(username, password)
                localStorage.setItem('token',response.data.token)
                localStorage.setItem('username',response.data.username)
                localStorage.setItem('userid',response.data.userid)
                navigate('/todos')
            }
        }catch(err){
            console.log('failed to authenticate');
            alert('authentication failed')
        }
    }

    return (
        <>
        <div className="container ">
        <form onSubmit={handleSubmit} >
            <div className="form-group">
              <label htmlFor=""></label>
              <input type="text" value={username} name="" id="" className="form-control" placeholder="username" onChange={(e)=>setUsername(e.target.value)} required/>
            </div>

            <div className="form-group">
              <label htmlFor=""></label>
              <input type="password" value={password} name="" id="" className="form-control" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div className="button">
                <button className="btn btn-primary btn-block">{type === 'login'? 'Login': 'Register'}</button>
            </div>
            
        </form>
        <small className='text-muted'>{type === 'login'? <p>Don't have an account? <Link to={'/register'}>Register now</Link></p> :<p>Already have an account? <Link to={'/login'}>Login</Link></p>}</small>

        </div>
        </>
    )
}

export default Auth