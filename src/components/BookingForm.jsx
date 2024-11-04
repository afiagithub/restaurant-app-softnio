import bookingImg from "../assets/booking.jfif"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TitleLine from "./shared/TitleLine";
import { useState } from "react";
import CommonBtn from "./shared/CommonBtn";

const BookingForm = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div className="text-white bg-cover bg-top"
            style={{ backgroundImage: `url(${bookingImg})` }}>
            <div className="w-full p-8 lg:px-12 lg:w-[50%]">
                <div className="w-full">
                    <TitleLine sub={'Book Your Table'} />
                    <h3 className="capitalize font-bebas font-medium text-4xl lg:text-5xl my-5">
                    Book Now</h3>
                    <p className="text-sm font-robo lg:w-4/5">
                        Enim tempor eget pharetra facilisis sed maecenas adipiscing.
                        Eu leo molestie vel, ornare non id blandit netus.</p>
                    <form className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <input name="title" type="text" placeholder="Your Name * "
                                className="block w-full px-5 py-3 mt-2 text-white placeholder-white 
                                border border-white bg-transparent rounded-lg" />
                        </div>

                        <div>
                            <input name="title" type="text" placeholder="Your Email"
                                className="block w-full px-5 py-3 mt-2 text-white placeholder-white 
                                border border-white bg-transparent rounded-lg" />
                        </div>

                        <div>
                            <DatePicker name="updatedDate"
                                className='block w-full lg:w-[280px] px-5 py-3 mt-2 text-white placeholder-white 
                                border border-white bg-transparent rounded-lg'
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div>
                            <input name="slots" type="number" placeholder="Total People"
                                className="block w-full px-5 py-3 mt-2 text-white placeholder-white 
                                border border-white bg-transparent rounded-lg" />
                        </div>

                        <div className="col-span-2">
                            <textarea name="short_desc" rows={5} placeholder="Message"
                                className="block w-full px-5 py-3 mt-2 text-white placeholder-white 
                                border border-white bg-transparent rounded-lg"></textarea>
                        </div>
                        <div>
                            <CommonBtn btnText={'Book Now'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;