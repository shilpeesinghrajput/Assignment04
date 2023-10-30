import React from 'react'
;
import image3 from '../assets/cardimg.png';
import './Cards1.css'
import Stars from './stars';



function Cards1(props) {
  return (
      <div className="otherCard min-w-[252px] h-fit">
  <img  className="w-[252px] h-[180px]" src={props.imageURL} alt="Sunset in the mountains"/>

    <p  className="text-black text-left text-sm font-bold mt-[14px]">
    Modern Wall Decor Framed Painting
    </p>
 <div className='flex mt-[25px] items-center'>
 <span  className="text-lg font-bold text-black-700">$199.99</span>
 <Stars count={5} />
   </div>

</div> 
  )
}

export default Cards1
