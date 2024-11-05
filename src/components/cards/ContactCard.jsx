import React from 'react';

const ContactCard = ({icon, title, desc1, desc2}) => {
    return (
        <div className="card w-72 flex flex-col justify-center items-center gap-3">
            <p className="text-[#FEBF00] text-xl">{icon}</p>
            <h4 className="font-bebas font-medium text-2xl capitalize">{title}</h4>
            <p className="text-sm">{desc1} <br /> {desc2}</p>
        </div>
    );
};

export default ContactCard;