import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


const TeamCard = ({t}) => {
    const {img, post, title} = t
    return (
        <div className='text-center w-80 shadow-md rounded-lg px-4 py-8'>
            <img className='w-72 rounded-md mx-auto' src={img} alt="" />
            <h3 className='text-2xl font-bold my-2'>{title}</h3>
            <p className='font-bold'>{post}</p>
            <div className='flex justify-center text-3xl '>
                <FaFacebook className='m-2 text-blue-800'></FaFacebook>
                <FaInstagram className='m-2 text-orange-600'></FaInstagram>
                <FaLinkedin className='m-2 text-blue-600'></FaLinkedin>
                <FaTwitter className='m-2 text-blue-500'></FaTwitter>
            </div>
        </div>
    );
};

export default TeamCard;