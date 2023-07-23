import React from 'react';
import images from "../../constants/images";
import "./SubHeading.css";

const SubHeading = ({title}) => {
  return (
    <div className='back' style={{marginBottom: '1rem'}}>
      <p className='p__cormorant'> {title}</p>
      <img src={images.spoon} alt="spoon" className='spoon_img'/>
      
      </div>
  )
}

export default SubHeading;