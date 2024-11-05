import footerImg from "../../assets/restaurant.jfif"
import { LuClock } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import ContactCard from "../cards/ContactCard";

const Footer = () => {
    return (
        <div className="hero text-white min-h-screen font-robo bg-cover" 
        style={{ backgroundImage: `url(${footerImg})` }}>
            <div className="hero-overlay bg-[#000000CC]"></div>
            <div className="text-center px-10 lg:px-5 py-10">
                <h3 className="capitalize font-bebas font-medium text-4xl lg:text-5xl my-5">
                    We ready to have you the best dining experiences
                </h3>

                <div className="flex flex-col lg:flex-row justify-around items-center gap-5 lg:gap-0 mt-7 lg:mt-12">
                    <ContactCard icon={<LuClock />} title={'Opening hours'}
                        desc1={'Monday - Sunday'} desc2={'9:00 AM to 11:30 PM'} />
                    <ContactCard icon={<MdOutlinePhoneInTalk />} title={"LET'S TALK"}
                        desc1={'Phone: 1-800-222-4545'} desc2={'Fax: 1-800-222-4545'} />
                    <ContactCard icon={<MdMailOutline />} title={'BOOK A TABLE'}
                        desc1={'Email: demo@website.com'} desc2={'Support: support@website.com'} />
                    <ContactCard icon={<IoLocationOutline />} title={'Our Address'}
                        desc1={'123 Stree New York City , United'} desc2={'States Of America.'} />
                </div>

                <div className="flex flex-row justify-center items-center gap-5 mt-16 lg:mt-32">
                    <a href="https://www.facebook.com/" target="_blank" className="border rounded-full p-3">
                    <FaFacebook /></a>
                    <a href="https://www.facebook.com/" target="_blank" className="border rounded-full p-3">
                    <FaSquareXTwitter /></a>
                    <a href="https://www.facebook.com/" target="_blank" className="border rounded-full p-3">
                    <FaInstagramSquare /></a>
                    <a href="https://www.facebook.com/" target="_blank" className="border rounded-full p-3">
                    <FaLinkedin /></a>
                </div>
                <p className="font-pop text-sm lg:text-lg mt-5">© 2023 
                    <span className="text-[#FEBF00]"> Niomax</span> All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;