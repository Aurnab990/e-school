import React from 'react';
import {  Link } from "react-router-dom";
const Signup = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                        <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                <h1>Already have an Account? <Link className='text-red-400 font-bold' to={'/login'}>Login</Link> </h1>
                                </label>
                            </div>
                            <div class="form-control  grid grid-cols-2">
                                <button class="btn btn-primary">Login</button>
                                <button className=' w-2/4 ml-8  '> <img className='w-20 ' src="https://logowik.com/content/uploads/images/985_google_g_icon.jpg" alt="" /> </button>
                            </div>
                           

                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;