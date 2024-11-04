import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import PopularMenu from '../components/PopularMenu';
import BookingForm from '../components/BookingForm';
import Reviews from '../components/Reviews';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <PopularMenu/>
            <BookingForm/>
            <Reviews/>
        </div>
    );
};

export default Home;