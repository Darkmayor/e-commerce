import React from 'react';
import { MdLocalOffer } from "react-icons/md";


const Cart = ({ cartInfo }) => {
  return (
    <div className='' >
      <div className='flex flex-col gap-x-2 bg-white rounded-lg hover:bg-richblack-100 p-2'>
        <img src={cartInfo.image} alt={cartInfo.name} width={300}
        />
        <p className='font-semibold flex  gap-1  ml-[29%] text-richblue-800 p-2 text-xl'>{cartInfo.name}
        <span className='mt-1'>
        <MdLocalOffer />
       </span>
     
       </p>
       <p className='mx-auto text-richblue-200 from-blue-100'>
       {cartInfo.info}
       </p>


      
      </div>
    </div>
  );
};

export default Cart;