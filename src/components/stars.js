import React from 'react'
import starr from '../assets/star.png'

const Stars = (props) => {

          const starss = new Array(props.count).fill('*');

  return (
          <div className='flex gap-1 ml-auto'>
 {  starss.map((star,index)=><span key={index}><img src={starr} alt="" /></span>)}
          </div>
  )
}

export default Stars
