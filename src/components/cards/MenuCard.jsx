import React from 'react';

const MenuCard = ({img, title, desc}) => {
    return (
        <div className="card bg-base-100 w-72 lg:w-64 h-72">
            <figure className="px-10 pt-10">
                <img src={img} alt="Burger" className="rounded-xl h-28" />
            </figure>
            <hr className="border-2 border-[#BD1F17] w-20 mx-auto rounded-xl my-3" />
            <div className="card-body items-center text-center pt-0 px-0">
                <h2 className="capitalize font-bebas text-2xl mt-5">{title}</h2>
                <p className="font-inter text-sm">{desc}</p>
            </div>
        </div>
    );
};

export default MenuCard;