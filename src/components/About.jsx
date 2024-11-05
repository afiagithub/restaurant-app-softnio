import aboutImg from "../assets/about.jfif"
import callImg from "../assets/call.png"
import sideImg from "../assets/sideDish.png"
import serviceImg from "../assets/package.png"
import medalImg from "../assets/medal.png"
import bagImg from "../assets/bag.png"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ServiceCard from "./cards/ServiceCard";
import CommonBtn from "./shared/CommonBtn";

const About = () => {
    return (
        <div className="py-10 lg:py-20 lg:px-28 relative">
            <div className="hero min-h-[50vh]">
                <img src={sideImg} alt="" className="hidden lg:flex absolute right-0 bottom-36 w-32" />
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-5 w-full">
                    <div className="relative w-4/5">
                        <img src={aboutImg} className="max-w-sm lg:max-w-lg rounded-lg shadow-2xl" />

                        <div className="card bg-white w-56 font-opensans flex flex-row gap-5 items-center 
                    absolute top-5 left-5 p-3">
                            <div className="radial-progress text-[#FEBF00]"
                                style={{ "--value": 80 }} role="progressbar">
                                <span className="text-black font-bold text-xl">50+</span></div>
                            <p className="font-semibold text-sm">Market <br />
                                Experiences</p>
                        </div>
                    </div>
                    <div className='w-4/5 text-left'>
                        <Tabs selectedTabClassName="bg-[#B52B1D] border-b-2 border-[#B52B1D] text-white">
                            <TabList className='font-medium border-b-2 border-[#B52B1D] font-inter text-sm'>
                                <Tab>About</Tab>
                                <Tab>Experience</Tab>
                                <Tab>Contact</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="py-5">
                                    <p className="font-bebas font-medium text-4xl lg:text-5xl text-[#181818]">
                                        Exceptional culinary <br /> experience and delicious food
                                    </p>
                                    <p className="font-robo text-sm py-5 w-[95%]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                                        odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                                        sit amet consectetur adipiscing elit do eiusmod tempor incididunt
                                        ut labore et dolore magna minim veniam nostrud exercitation.
                                    </p>
                                    <div className="flex flex-row items-center gap-8">
                                        <CommonBtn btnText={'About More'}/>
                                        <p className="font-robo font-semibold flex flex-row gap-2">
                                            <img src={callImg} alt="" /> +88 3426 739 485</p>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className='py-5'>
                                    <p className="font-bebas font-medium text-4xl lg:text-5xl text-[#181818]">
                                        Culinary experience of <br /> 12+ years
                                    </p>
                                    <p className="font-robo text-sm py-5 w-[95%]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                                        odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                                        sit amet consectetur adipiscing elit do eiusmod tempor incididunt
                                        ut labore et dolore magna minim veniam nostrud exercitation.
                                    </p>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className='py-5'>
                                    <p className="font-bebas font-medium text-4xl lg:text-5xl text-[#181818]">
                                        Get your booking now <br /> by calling or online request
                                    </p>
                                    <p className="font-robo text-sm py-5 w-[95%]">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Ornare non sed est cursus. Vel hac convallis ipsum, facilisi
                                        odio pellentesque bibendum viverra tempus. Lorem ipsum dolor
                                        sit amet consectetur adipiscing elit do eiusmod tempor incididunt
                                        ut labore et dolore magna minim veniam nostrud exercitation.
                                    </p>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-center">
                <ServiceCard img={serviceImg} service={'fast delivery'} desc={'Within 30 minutes'} />
                <ServiceCard img={medalImg} service={'absolute dining'} desc={'Best buffet restaurant'} />
                <ServiceCard img={bagImg} service={'Best buffet restaurant'} desc={'Grab your food order'} />
            </div>
        </div>
    );
};

export default About;