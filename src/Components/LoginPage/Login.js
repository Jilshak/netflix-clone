import React from 'react'
import { Login_background } from '../../Constants/Constants'
import '../LoginPage/Login.css'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className="parent">
           <Link to='/'> <img className='netflix' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" /></Link>
            <div className='background' style={{ backgroundImage: `url(${Login_background})` }}>
                <div className="container">
                    <h1 className='start'>Sign In</h1>
                    <form className='form-elements' >
                        <input className='input' type="Email" placeholder='   Email or phone number' /><br />
                        <input className='input' type="password" placeholder='   Password' /> <br />
                        <button className='buttons'>Sign In</button>
                        
                        <div className='New'>
                            <p>New to Netflix ?  <a className='signup' href="#">Sign up now</a> </p>
                           
                            <p className='lastpara'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a> </p>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
