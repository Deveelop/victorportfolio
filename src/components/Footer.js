import React from 'react';

import { BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'; 
const Footer = () => {
  return (
    <footer className="grid md:grid-cols-3 bg-[--col] text-white md:p-8 p-4">

      <div className="flex flex-col col-span-3 md:col-span-1 py-2">
            {/* logo should be here */}
            <h4>
              deveeloop
            </h4>
      </div>

      <figure className="grid md:grid-cols-2 grid-cols-1 col-span-3 md:col-span-1 py-2">
        <div className="text-gray-400">
          <h1 className="text-white font-bold text-2xl"> Quick Links </h1>
            <div className="pl-3 my-2">
              <p> Home</p>
              <p> About me </p>
              <p> Send me a message </p>
            </div>
        </div>
        
    
      </figure>

      <div className="flex md:justify-end justify-center gap-x-8 col-span-3 md:col-span-1 py-2 mt-8 md:mt-0">
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsLinkedin size={25} /> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsInstagram size={25} /> </a>
          <a href="http://" target="_blank" rel="noopener noreferrer"> <BsTwitter size={25} /> </a>
      </div>

      <div className="w-full col-span-3 mt-6">
        <hr className="border-gray-700 mb-6" />
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} deveeloop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
