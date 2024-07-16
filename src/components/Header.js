import React from 'react';
import Logo from '../assets/logoimage.png'
import { PiShareFatBold } from "react-icons/pi";
import { useState } from 'react';
import Share from './Share';

const Header = () => {

  const [showShare, setshowShare] = useState(false);

  return <div className=' py-8 pb-0 mb-2 ' >
    <div className='container mx-auto' >
      <div className='flex justify-between items-center ' >
        <a href='#'>
          <img src={Logo} className='md:w-[300px] w-[200px] ' />
        </a>
        <button className='btn btn-sm flex gap-4 items-center px-3 ml-2 w-[10rem] hover:text-yellow-500 ' >MY PORTFOLIO
          <button className='text-2xl rounded-full share  ' onClick={() => setshowShare(true)} >
            <PiShareFatBold />
          </button>
        </button>

      </div>{showShare && <Share onclose={() => setshowShare(false)} />}
    </div>
  </div>;
};

export default Header;
