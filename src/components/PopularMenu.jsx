import TitleLine from "./shared/TitleLine";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Navigation } from 'swiper/modules';
import burgerImg from "../assets/burger.jfif"
import pizzaImg from "../assets/pizza.png"
import friesImg from "../assets/fries.jfif"
import nuggetImg from "../assets/nugget.jfif"
import MenuCard from "./cards/MenuCard";
import sideImg from "../assets/menuside.png"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "../custom.css"

const PopularMenu = () => {
    return (
        <div className='bg-[#FBF7F2] py-12 lg:py-20 px-7 lg:px-28 relative'>
            <img src={sideImg} alt="" className="hidden lg:flex absolute left-0 bottom-36 w-32" />
            <div className="flex flex-row justify-between items-center">
                <TitleLine title={'POPULAR FOOD ITEMS'} sub={'Crispy, Every Bite Taste'} />

                <div className="flex flex-row gap-5">
                    <button className="arrow-left w-10 h-10 bg-white rounded-full shadow-lg text-lg 
                    hover:text-[#BD1F17]"><IoIosArrowBack className="mx-auto" /></button>
                    <button className="arrow-right w-10 h-10 bg-white rounded-full shadow-lg text-lg 
                    hover:text-[#BD1F17]"><IoIosArrowForward className="mx-auto" /></button>
                </div>
            </div>

            <Swiper breakpoints={{
                640: { width: 640, slidesPerView: 1 },
                768: { width: 768, slidesPerView: 2 },
                1024: { width: 1024, slidesPerView: 4, spaceBetween: 30 }
            }}
                navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }} modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2500, disableOnInteraction: false, }} loop={true} className="mySwiper mt-6 lg:mt-12">
                <SwiperSlide className="place-items-center lg:place-items-baseline lg:mx-3">
                    <MenuCard img={burgerImg} title={'vegetables burger'} desc={'Barbecue Italian cuisine pizza'} />
                </SwiperSlide>
                <SwiperSlide className="place-items-center lg:place-items-baseline lg:mx-3">
                    <MenuCard img={pizzaImg} title={'Spacial Pizza'} desc={'Barbecue Italian cuisine pizza'} />
                </SwiperSlide>
                <SwiperSlide className="place-items-center lg:place-items-baseline lg:mx-3">
                    <MenuCard img={friesImg} title={'Spacial French fries'} desc={'Barbecue Italian cuisine'} />
                </SwiperSlide>
                <SwiperSlide className="place-items-center lg:place-items-baseline lg:mx-3">
                    <MenuCard img={nuggetImg} title={'Cuisine Chicken'} desc={'Japanese Cuisine Chicken'} />
                </SwiperSlide>
                <SwiperSlide className="place-items-center lg:place-items-baseline lg:mx-3">
                    <MenuCard img={burgerImg} title={'vegetables burger'} desc={'Barbecue Italian cuisine pizza'} />
                </SwiperSlide>
                <SwiperSlide className="place-items-center lg:place-items-baseline lg:mx-3">
                    <MenuCard img={nuggetImg} title={'Cuisine Chicken'} desc={'Japanese Cuisine Chicken'} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PopularMenu;