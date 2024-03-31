import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Cards from '../components/Cards'

import baby from "../assets/SliderImg/baby.png"
import kitchen from "../assets/SliderImg/Kitchen.png"
import mobile from "../assets/SliderImg/mobile.png"
import skincare from "../assets/SliderImg/skincare.png"


const HomePage = () => {

    const images = [
      baby,
      kitchen,
      mobile,
      skincare
    ];

  return (
    <div className='relative'>
      <div >
      <ImageSlider images={images}/>
      

      </div>
      <div className='absolute w-full top-[50%] z-[1]'>
        <Cards/>

      </div>

      
        



        

    
    </div>
  )
}

export default HomePage