import React from 'react';
import bannerImg from "../assets/BannerImg.png"
import flowerImg from '../assets/Vector.png'
import bgImg from "../assets/orange.png"
import CommonBtn from './shared/CommonBtn';

const Banner = () => {
    return (
        <div className="hero min-h-[50vh] px-7 lg:px-44 py-8 text-white font-robo"
            style={{ background: `url(${bgImg}), linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)` }}>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-0">
                <div className='lg:-mr-16 z-10 px-5 lg:px-0'>
                    <h1 className="font-medium font-bebas capitalize text-5xl lg:text-7xl"
                        style={{ background: "linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)" }}>
                        Taste the authentic <br /> Saudi cuisine</h1>
                    <p className="py-6 lg:w-[70%] lg:text-lg font-light">
                        Among the best Saudi chefs in the world, serving you something beyond flavor.
                    </p>
                    <CommonBtn btnText={'Explore Menu'}/>
                </div>
                <div className='relative'>
                    <img src={flowerImg} alt="flower" className='absolute -top-5 -right-5' />
                    <img src={bannerImg}
                        className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl lg:-ml-16" />
                    <div className='absolute right-4 lg:-right-10 bottom-4 lg:-bottom-10 w-20 h-20 capitalize 
                    font-bebas text-xl bg-[#FEBF00] rounded-full flex flex-row justify-center 
                    items-center text-black'>
                        <p className='p-3'>Today <br /> Offer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;