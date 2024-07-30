import React, { FC } from 'react'
import Auth from '../components/Auth'


const RegisterPage: FC = () => {
    return (
        <>
            <div className="container col-12 col-md-6">
                <h2 className='text-center'>Register</h2>
                <Auth type='register' />
            </div>
        </>
    )
}

export default RegisterPage