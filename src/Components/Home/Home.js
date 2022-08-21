import React from 'react';
import Review from '../Review';
import Courses from './Courses';
import Header from './Header';

import Services from './Services';
import Success from './Success';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Success></Success>
            <Courses></Courses>
            <Review></Review>
            
        </div>
    );
};

export default Home;