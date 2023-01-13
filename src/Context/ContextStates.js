import { useState } from "react";
import CreatedContext from "./Context";
import { auth } from '../Firebase/Firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const AuthenticationState = (props) => {

    //navigation to login screen after signup
    const navigate = useNavigate()

    //error states
    const [error, setError] = useState('')

    //SignUp  email
    const [email, setEmail] = useState('')

    //SignUp password
    const [password, setPassword] = useState('')

    // //LogIn  email
    const [LogInEmail, setLogInEmail] = useState('')

    // //LogIn password
    const [LogInPassword, setLogInPassword] = useState('')

    //function to store the data and authenticate it
    const register = async () => {
        try {

            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");


        } catch (error) {
            setError(error.message)
        }
    }

    //logIn with the registerd data
    const logIn = async () => {
        try {

            await signInWithEmailAndPassword(auth, LogInEmail, LogInPassword);
            navigate("/home");

        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <CreatedContext.Provider value={{ email, setEmail, password, setPassword, register, logIn, setLogInEmail, setLogInPassword, error}}>
            {props.children}
        </CreatedContext.Provider>
    )
}

export default AuthenticationState