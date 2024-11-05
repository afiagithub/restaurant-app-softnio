
const ServiceCard = ({img, service, desc}) => {
    return (
        <div className="card w-80 mt-6 lg:mt-16">
            <div className="items-center text-center flex flex-row gap-5">
                <div className='w-20 h-20 rounded-full shadow-md flex items-center justify-center'>
                    <img src={img} alt="" />
                </div>
                <div className='text-left'>
                    <h2 className='font-bebas text-2xl font-semibold'>{service}</h2>
                    <p className='font-inter text-lg'>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;