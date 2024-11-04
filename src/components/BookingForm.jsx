import bookingImg from "../assets/booking.jfif"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TitleLine from "./shared/TitleLine";
import { useState } from "react";
import calendarImg from "../assets/calender.png"
import numImg from "../assets/number.png"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingForm = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleBooking = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const reserveDate = form.reserveDate.value;
        const total_people = form.total_people.value;

        if(!name){
            toast.error("Please provide your name")
            return;
        }

        const bookingData = {
            name,
            email,
            reserveDate,
            total_people
        }
        console.log(bookingData);
    }
    return (
        <div className="text-white bg-cover bg-top py-12 lg:py-16 px-7 lg:px-20"
            style={{ backgroundImage: `url(${bookingImg})` }}>
            <div className="w-full p-8 lg:px-12 lg:w-[50%]">
                <TitleLine sub={'Book Your Table'} />
                <h3 className="capitalize font-bebas font-medium text-4xl lg:text-5xl my-5">Book Now</h3>
                <p className="text-sm font-robo lg:w-4/5">Enim tempor eget pharetra facilisis sed
                    maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>

                <form onSubmit={handleBooking} className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                    <div>
                        <input name="name" type="text" placeholder="Your Name * "
                            className="block w-full px-5 py-3 mt-2 text-white placeholder-white 
                            border border-white bg-transparent " />
                    </div>
                    <div>
                        <input name="email" type="email" placeholder="Your Email"
                            className="block w-full px-5 py-3 mt-2 text-white placeholder-white 
                            border border-white bg-transparent " />
                    </div>
                    <div className="relative">
                        <img src={calendarImg} alt="calendar" className="absolute top-5 right-3" />
                        <DatePicker name="reserveDate"
                            className='block w-full lg:w-[238px] px-5 py-3 mt-2 text-white placeholder-white 
                            border border-white bg-transparent '
                            selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div className="relative">
                        <img src={numImg} alt="calendar" className="absolute top-6 right-3" />
                        <input name="total_people" type="number" placeholder="Total People"
                            className="block w-full px-5 py-3 mt-2 text-white placeholder-white 
                            border border-white bg-transparent " />
                    </div>
                    <div className="col-span-2">
                        <textarea name="message" rows={5} placeholder="Message"
                            className="block w-full px-5 py-3 mt-2 text-white placeholder-white 
                            border border-white bg-transparent "></textarea>
                    </div>
                    <div>
                        <input className="btn bg-[#FEBF00] rounded-none font-robo font-bold border-2 border-[#FEBF00] 
                        hover:border-[#FEBF00] hover:hover:text-[#FEBF00] hover:bg-transparent"
                            type="submit" value="Book Now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;