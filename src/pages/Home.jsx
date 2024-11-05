import React from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import PopularMenu from '../components/PopularMenu';
import BookingForm from '../components/BookingForm';
import Reviews from '../components/Reviews';
import Footer from '../components/shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <PopularMenu/>
            <BookingForm/>
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;