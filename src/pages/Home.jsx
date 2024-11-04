import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import PopularMenu from '../components/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <PopularMenu/>
        </div>
    );
};

export default Home;