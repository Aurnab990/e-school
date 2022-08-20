import React, { useEffect, useState } from 'react';
import Services from './Services';

const Courses = () => {
    const [Courses, setCourses] = useState(['']);

    useEffect(() => {
        fetch('Courses.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    })
    return (
        <div>
            <h1 className='text-center font-semibold mt-32 text-3xl'>Our Online <span className='text-green-400'>Courses</span></h1>
            <div className='mt-5 lg:mt-12 px-10 gap-5 grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-3'>
            
            {
                Courses.map(Course => <div>
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <figure class="px-10 pt-10">
                            <img src={Course.img} alt="Shoes" class="rounded-xl" />
                        </figure>
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">{Course.name}</h2>
                            <p>by {Course.author}</p>
                            <div class="card-actions">
                                <button class="btn rounded-2xl bg-green-500">Purchase now..</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
        </div>
    );
};

export default Courses;