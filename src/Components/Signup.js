import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { createUserWithEmailAndPassword,getAuth, sendEmailVerification} from "firebase/auth";
import {  Link,useNavigate } from "react-router-dom";

import app from '../firebase.init';
import useFirebase from '../firebase';


const auth = getAuth(app);
const Signup = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const {signInWithGoogle} = useFirebase();

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);
    const handleName = event =>{
        console.log(event.target.value);
    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    if(user){
        navigate('/login');
    }
    


    const handleUser = event => {
        createUserWithEmailAndPassword(email,password)
        /*.then(result =>{
            const user = result.user;
            console.log(user);
            varify();
        })
        .catch(error =>{
            console.error(error);
        })
        //console.log("Successs");
        //alert('Account created succesfully');
        event.preventDefault();*/
        
    }
    /*const varify = ()=>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            alert("Please Verify your email");
        })
        .catch()
    }*/
    

    return (
        <div>
            <div class="hero min-h-screen ">
                <form onSubmit={handleUser}>
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                        <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input onBlur={handleName} type="text" placeholder="name" class="input input-bordered" required/>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input onBlur={handleEmail} type="email" placeholder="email" class="input input-bordered" required/>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input onBlur={handlePassword} type="password" placeholder="password" class="input input-bordered" required/>
                                <label class="label">
                                <h1>Already have an Account? <Link className='text-red-400 font-bold' to={'/login'}>Login</Link> </h1>
                                </label>
                            </div>
                            <div class="form-control  grid grid-cols-2">
                                <button class="btn btn-primary"><Link to={'/courses'}>Login</Link></button>
                                <button onClick={signInWithGoogle} className=' w-2/4 ml-8  '> <img className='w-20 ' src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" /> </button>
                                
                            </div>
                            
                           

                
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;