import React from 'react'
import ImageSlider from '../components/ImageSlider'
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
    <div>
        <ImageSlider images={images}/>

    
    </div>
  )
}

export default HomePage