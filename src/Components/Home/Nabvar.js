import React from 'react';

const Nabvar = () => {
    const items = [
        <>
        
        <li className="text-bold text-lg"><a>Home</a></li>
        <li className="text-bold text-lg"><a>Courses</a></li>
        <li className="text-bold text-lg"><a>Others</a></li>
        <li className="text-bold text-lg"><a>Blog</a></li>
        <a className="btn bg-green-500">sign in</a>
        
        </>
    ]
    return (
        <div>
            <div class="navbar bg-base-100 px-5 lg:px-32">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {items}
                        </ul>
                    </div>
                    <a class=" normal-case text-xl"><img style={{ "width": "80px" }} src='https://media.istockphoto.com/vectors/education-logo-template-vector-id1343473268?b=1&k=20&m=1343473268&s=612x612&w=0&h=e5jgkFioEi2j8Ce1g25SGeXxL4GqXKjvl1yeNpccorw='></img></a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {items}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Nabvar;