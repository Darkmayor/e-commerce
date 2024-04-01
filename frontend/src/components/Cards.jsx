import React from 'react';
import mobile from '../assets/Categories/Mobile.png';
import skin from '../assets/Categories/Skincare.png';
import clothes from '../assets/Categories/Fashion.png';
import home from '../assets/Categories/Home.png';
import Cart from './Cart'; 

const Cards = () => {
  const cartInfo = [
    { name: "Mobile", image: mobile, info:"Grab up to 40% off on Smartphones.."},
    { name: "Skin Care", image: skin, info:"Choose from a wide range of Skin Care.." },
    { name: "Fashion", image: clothes, info:"Buy Footwear, Clothing and .." },
    { name: "Home", image: home, info:"Online shopping for Home.." }
  ];

  return (
    <div className='flex flex-wrap ml-[8vw] gap-x-5'>
      {cartInfo.map((item, index) => (
        <Cart key={index} cartInfo={item} />
      ))}
    </div>
  );
};

export default Cards;