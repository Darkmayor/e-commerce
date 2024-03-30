import React from 'react';
import { FaCartArrowDown } from "react-icons/fa";
import logo from "../assets/Logo/online-shop.png";
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className='flex h-14 items-center justify-between  '>
      <div className="flex items-center ml-[220px]">
        <img src={logo} width={50} height={55} alt='' />

        <label className="ml-4 flex-grow">
          <input
          
            type='text'
            placeholder='Search....'
            style={{
              width: '500px', // Adjust the width here
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="rounded-[0.5rem] bg-richblue-400 p-[8px] text-richblack-5 font-semibold text-[20px]"
          />
        </label>
        <div className='ml-3'>
        <CiSearch  size={45}/>
        </div>
       
      </div>
     
      

      <nav className='flex gap-x-6 mr-[220px]'>
      <button className='bg-richblue-400 text-white rounded-md px-[15px] hover:bg-richblue-200'>
        Log In
      </button>
      <button className='font-semibold bg-richblue-400 rounded-md px-[15px] text-white  hover:bg-richblue-200'>
        Your Orders
      </button>
      

      <FaCartArrowDown size={35}/>
      </nav>
    </div>
  );
};

export default Navbar;
