import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import '../../App.css'

export default function SignInPage({setIsAuth}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const checkLogin = e => {
        e.preventDefault();
        console.log(email, password)
    
        axios.post("http://localhost:1879/login", {
            email, 
            password,
        })
        .then(data => {
            console.log(data.data, "came from user login...");
            if ( data.data.status === 'OK') {
                setIsAuth(true);
                setTimeout(() => {
                    alert("login success")
                    window.localStorage.setItem("token", data.data.data)
                    window.location.href = './userData';
                }, 100);

            } else {
                alert("Error! " + data.data.error)
            }
        })

    }

    return (
        <div className="text-center m-5-auto">
            <h2>Sign in to us</h2>
            <form action="/home" onSubmit={checkLogin}>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={e => setEmail(e.target.value)} />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required onChange={e => setPassword(e.target.value)} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
