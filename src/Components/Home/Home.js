import React from 'react';
import Courses from './Courses';
import Header from './Header';
import Success from './Success';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Success></Success>
            <Courses></Courses>
        </div>
    );
};

export default Home;