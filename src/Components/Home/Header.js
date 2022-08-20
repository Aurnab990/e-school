import React from 'react';
import {  Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div class="hero min-h-screen px-10 lg:px-32">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://tonmoyac.github.io/e-school/images/Photos/Illustration.png" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold"><span>Learn With fun on <span className='text-green-300'>Any Schedule</span></span></h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to={'/courses'}><button class="btn rounded-2xl bg-green-500">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;