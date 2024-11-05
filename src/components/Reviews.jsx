import TitleLine from "./shared/TitleLine";
import sideImg1 from "../assets/tomato.png"
import sideImg2 from "../assets/green.jpg"
import vid1 from "../assets/vid1.mp4"
import vid2 from "../assets/vid2.mp4"
import vid3 from "../assets/vid3.mp4"
import ReviewCard from "./cards/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Reviews = () => {
    return (
        <div className="py-12 lg:py-16 px-7 lg:px-28 relative">
            <div className="flex flex-row justify-between items-center">
                <TitleLine title={'What Some of my Customers Say'} sub={'Crispy, Every Bite Taste'} />

                <div className="flex flex-row gap-5">
                    <button className="arrow-left arrow w-10 h-10 bg-white rounded-full shadow-lg text-lg 
                    hover:text-[#BD1F17]"><IoIosArrowBack className="mx-auto" /></button>
                    <button className="arrow-right arrow w-10 h-10 bg-white rounded-full shadow-lg text-lg 
                    hover:text-[#BD1F17]"><IoIosArrowForward className="mx-auto" /></button>
                </div>
            </div>

            <Swiper
                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }} modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2500, disableOnInteraction: true, }} loop={true} className="mySwiper">
                <SwiperSlide>
                    <ReviewCard vid={vid1} />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard vid={vid2} />
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCard vid={vid3} />
                </SwiperSlide>
            </Swiper>            
            <img src={sideImg1} alt="tomato" className="hidden lg:flex absolute top-28 left-0 w-28" />
            <img src={sideImg2} alt="tomato" className="hidden lg:flex absolute top-28 right-0 -z-10" />
        </div>
    );
};

export default Reviews;