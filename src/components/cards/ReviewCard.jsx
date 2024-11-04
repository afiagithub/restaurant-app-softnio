import { RiDoubleQuotesL } from "react-icons/ri";
import face from "../../assets/man.png"
import design from "../../assets/Group.png"

const ReviewCard = ({vid}) => {
    return (
        <div className="flex flex-col lg:flex-row-reverse justify-between gap-0 w-full my-5 lg:my-10">
            <div className="flex items-center justify-center lg:w-3/5">
                <video class="w-full h-full" controls autoplay>
                    <source src={vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="bg-[#FEBF00] relative p-16 lg:w-2/5">
                <RiDoubleQuotesL className="text-3xl absolute top-10 left-8" />
                <p className="leading-relaxed">You can't go wrong with Chicken Mandi,
                    I had it twice. The chicken was cooked perfectly,
                    juicy & soft (usually mandi chicken is a bit dry).
                    I would defiantly recommend it.</p>
                <div className="flex flex-row justify-between mt-24">
                    <div>
                        <h4 className="font-bebas font-medium text-lg">Khalid Al Dawsry</h4>
                        <p className="text-sm">Jeddah, Saudi</p>
                    </div>
                    <img src={face} alt="Face" className="w-12 h-12 rounded-full" />
                </div>
                <hr className="border mt-2 border-black" />
                <img src={design} alt="flower" className="absolute bottom-5 left-0" />
            </div>
        </div>
    );
};

export default ReviewCard;