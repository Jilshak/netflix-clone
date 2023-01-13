import '../SignUp/SignUp.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CreatedContext from '../../Context/Context'



function SignUp() {

    const x = useContext(CreatedContext)

    return (
        <div className="main">
            <div className='signUpcontainer'>
                <div className='incontainer'>
                    <h1 className='start'>Sign Up</h1>
                    <form className='form-elements' method="get">
                        <div>
                            <input onChange={(event) => x.setEmail(event.target.value)} className='input' placeholder='Email' type="email" id="email" name="email" required autocomplete="off" />
                        </div>
                        <div>
                            <input onChange={(event) => x.setPassword(event.target.value)} className='input' placeholder='Password' type="password" id="password" required />
                        </div>
                        <button onClick={x.register} className='buttons' type="button" id="btn">Sign Up Now</button>
                        <br />
                        <p>Already a member? <Link className='signup' to='/'><p className='signup'>Log in</p></Link></p>
                        <br />
                        <span className='error'>{x.error}</span>
                    </form>
                </div>

            </div >
        </div>
    )
}

export default SignUp
