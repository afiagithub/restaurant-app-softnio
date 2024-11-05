import React from 'react';
import { Link } from 'react-router-dom';

const CommonBtn = ({btnText}) => {
    return (
        <Link className="btn bg-[#FEBF00] font-robo font-bold border-2 border-[#FEBF00] 
        hover:border-[#FEBF00] hover:text-[#FEBF00] hover:bg-transparent rounded-none" to="/">
        {btnText}</Link>
    );
};

export default CommonBtn;