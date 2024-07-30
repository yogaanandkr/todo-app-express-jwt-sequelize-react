import React, { FC } from 'react'
import Auth from '../components/Auth'


const LoginPage: FC = ()=>{
    return(
        <>
           <div className="container col-12 col-md-6">
           <h2 className='text-center'>Login</h2>
           <Auth type='login'/>
           </div>
        </>
    )
}

export default LoginPage