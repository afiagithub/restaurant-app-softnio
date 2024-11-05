import footerImg from "../../assets/restaurant.jfif"
import { LuClock } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import ContactCard from "../cards/ContactCard";

const Footer = () => {
    return (
        <div
            className="hero text-white h-[90vh] font-robo"
            style={{ backgroundImage: `url(${footerImg})` }}>
            <div className="hero-overlay bg-[#000000CC]"></div>
            <div className="text-center">
                <h3 className="capitalize font-bebas font-medium text-4xl lg:text-5xl my-5">
                    We ready to have you the best dining experiences
                </h3>

                <div className="flex flex-col lg:flex-row justify-around mt-5 lg:mt-12">
                    <ContactCard icon={<LuClock />} title={'Opening hours'} 
                    desc1={'Monday - Sunday'} desc2={'9:00 AM to 11:30 PM'}/>
                    <ContactCard icon={<MdOutlinePhoneInTalk />} title={"LET'S TALK"} 
                    desc1={'Phone: 1-800-222-4545'} desc2={'Fax: 1-800-222-4545'}/>
                    <ContactCard icon={<LuClock />} title={'BOOK A TABLE'} 
                    desc1={'Email: demo@website.com'} desc2={'Support: support@website.com'}/>
                    <ContactCard icon={<LuClock />} title={'Our Address'} 
                    desc1={'123 Stree New York City , United'} desc2={'States Of America.'}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;