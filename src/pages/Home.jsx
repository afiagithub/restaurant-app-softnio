import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import PopularMenu from '../components/PopularMenu';
import BookingForm from '../components/BookingForm';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <PopularMenu/>
            <BookingForm/>
        </div>
    );
};

export default Home;