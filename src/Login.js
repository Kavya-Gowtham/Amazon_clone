
import React from 'react'
import './Login.css';
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { auth  } from "./firebase";

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history('/');
        })
        .catch(error => alert(error.message))
        //some firebase login process
    }
 
    const register = e => {
        e.preventDefault();
        //creates a new user with provided email and passwrd and returns an auth object
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //generated auth means successfully created a new user with email and password
            console.log(auth);
            if(auth) {
                history('/');
            }
        })
        .catch(error => alert(error.message))
        //some firebase register process
    }

    return (
        <div className = "login">
            <Link to = '/'>
                <img className='login_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG21.png" alt= ""/>
            </Link>
            <div className="login_container">
                <h1>Sign-In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange = {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange = {e => setPassword(e.target.value)}/>

                    <button onClick= {signIn} className='login_signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of 
                    Use & Sale. Please see our Privacy Notice our Cookies 
                    Notice and our Interest-Based Ads Notice. 
                </p>

                <button onClick= {register}  className='login_registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
