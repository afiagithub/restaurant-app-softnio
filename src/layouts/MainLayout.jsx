import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';

const MainLayout = () => {
    return (
        <div className='font-robo'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;