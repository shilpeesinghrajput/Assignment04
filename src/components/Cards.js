import React from 'react'
import './Cards.css'

import share from '../assets/share.png';
import heart from '../assets/heart.png';
import comment from '../assets/comment.png';
import Cards1 from './Cards1';

import {
  
  ListItem,
  ListItemPrefix,
  Avatar,
  Typography,
} from "@material-tailwind/react";

const Cards = (props) => {
  return (
    <div>

    <div className="mainCards w-[620px] h-[600px] rounded overflow-hidden">
    <div>
      <ListItem>
          <ListItemPrefix >
            <Avatar variant="" className='avt'  alt="candice" src={props.smallImgURL}/>
          </ListItemPrefix>
          <div>
            <Typography variant="h5" color="blue-gray">
            {props.Name}
            </Typography>
            <Typography variant="small" color="gray"  classNameName="font-normal">
           {props.Email}
            </Typography>
          </div>
        </ListItem>
    </div>
    <div className="px-4 py-4 mainsection">
    <p  className="text-gray-700 text-left">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className='text-red-400'>Read More</span>
    </p>
  </div>
  <img  className="w-full image" src={props.largeImgURL} alt="Sunset in the mountains"/>
  
  <div  className="px-6 pt-2 pb-2 flex">
    <span  className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"><img src={heart} alt="" /> <span className='font-semibold text-black-700'>9.8k</span></span>
    <span  className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"><img src={comment} alt="" /> <span  className='font-semibold text-black-700'>8.6k</span></span>
    <span  className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"><img src={share} alt="" /> <span className='font-semibold text-black-700'>7.2k</span></span>
  </div>
</div>

{/* <div className="mainCards w-[620px] h-[600px] rounded overflow-hidden">
    <div>
      <ListItem>
          <ListItemPrefix >
            <Avatar variant="" className='avt'  alt="candice" src={props.smallImgURL}/>
          </ListItemPrefix>
          <div>
            <Typography variant="h5" color="blue-gray">
            Lara Leones
            </Typography>
            <Typography variant="small" color="gray"  classNameName="font-normal">
            @thewallart
            </Typography>
          </div>
        </ListItem>
    </div>
    <div className="px-4 py-4 mainsection">
    <p  className="text-gray-700 text-left">
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. <span className='text-red-400'>Read More</span>
    </p>
  </div>
  <img  className="w-full image" src={largeImgURL} alt="Sunset in the mountains"/>
  
  <div  className="px-6 pt-2 pb-2 flex">
    <span  className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"><img src={heart} alt="" /> <span className='font-semibold text-black-700'>9.8k</span></span>
    <span  className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"><img src={comment} alt="" /> <span  className='font-semibold text-black-700'>8.6k</span></span>
    <span  className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"><img src={share} alt="" /> <span className='font-semibold text-black-700'>7.2k</span></span>
  </div>
</div> */}


    </div>
  )
}

export default Cards
