import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {  Link } from "react-router-dom";
import app from '../firebase.init';

const auth = getAuth(app);
const Login = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);


    const handleEmail = event =>{
        setEmail(event.target.value);
    }
    const handlePassword = event =>{
        setPassword(event.target.value);
    }
    const handleLogin = event =>{
        event.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log("success");
        })
        .catch(error =>{
            console.error(error);

        })
    }
    return (
        <div>
            <div class="hero min-h-screen ">
                <form onSubmit={handleLogin}>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input onBlur={handleEmail} type="email" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input onBlur={handlePassword} type="password" placeholder="password" class="input input-bordered" />
                                <h1>Don't have an Account? <Link className='text-red-400 font-bold' to={'/signup'}>Create an Account</Link> </h1>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Login;