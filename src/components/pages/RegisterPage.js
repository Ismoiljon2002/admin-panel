import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../../App.css'

export default function SignUpPage({setIsAuth}) {

    const nameInput = useRef();
    const emailInput = useRef();
    const passwordInput = useRef();
    function registerUser(e) {
        e.preventDefault();
        const regisrationTime = new Date();
        const name = nameInput.current.value;
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        
        console.log(name, email, password, regisrationTime);
        axios.post("http://localhost:1879/register", {
            name, 
            email, 
            password,
            regisrationTime,
            status: "Active",
        })
        .then(data => {
            console.log(data, "came from user reg...")
            if ( data.data.status === "OK") {
                setIsAuth(true);
                
                alert("register success");
                window.localStorage.setItem("token", data.data.data)
                window.location.href = './userData'
            } else {
                alert('This email already registered! ')
            }
        })  
    }

    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form action="/home" onSubmit={registerUser}>
                <p>
                    <label>name</label><br/>
                    <input ref={nameInput} type="text" name="first_name" required />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input ref={emailInput} type="email" name="email" required />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input ref={passwordInput} type="password" name="password" required />
                </p>
                
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )

}
