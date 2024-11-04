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

const PopularMenu = () => {
    return (
        <div className='bg-[#FBF7F2] py-7 lg:py-20 px-7 lg:px-28'>
            <TitleLine title={'POPULAR FOOD ITEMS'} sub={'Crispy, Every Bite Taste'} />

            <Swiper slidesPerView={4}
                spaceBetween={30}
                navigation={true} modules={[Autoplay, Navigation]}
                autoplay={{ delay: 2500, disableOnInteraction: false, }} loop={true} className="mySwiper mt-6 lg:mt-12">
                <SwiperSlide>
                    <MenuCard img={burgerImg} title={'vegetables burger'} desc={'Barbecue Italian cuisine pizza'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <MenuCard img={pizzaImg} title={'Spacial Pizza'} desc={'Barbecue Italian cuisine pizza'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <MenuCard img={friesImg} title={'Spacial French fries'} desc={'Barbecue Italian cuisine'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <MenuCard img={nuggetImg} title={'Cuisine Chicken'} desc={'Japanese Cuisine Chicken'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <MenuCard img={burgerImg} title={'vegetables burger'} desc={'Barbecue Italian cuisine pizza'}/>
                </SwiperSlide>
                <SwiperSlide>
                    <MenuCard img={nuggetImg} title={'Cuisine Chicken'} desc={'Japanese Cuisine Chicken'}/>
                </SwiperSlide>                
            </Swiper>
        </div>
    );
};

export default PopularMenu;