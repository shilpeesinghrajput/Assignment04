import React from "react";
import { Input } from "@material-tailwind/react";
import "./Searchbar.css";
import filterICON from '../assets/filterICON.png';
import Cards from "./Cards";
import Cards1 from "./Cards1";
import {ratingData} from "../static/ratingCardData";
import { cardData } from "../static/imageCardData";

const Searchbar = () => {
  return (
    <div>
   <div className="mid-top relative flex items-center">
        <i className="absolute text-gray-400 top-[29px] left-4"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <g id="Component_32" data-name="Component 32" transform="translate(0.14 0.14)">
              <rect id="Rectangle_1829" data-name="Rectangle 1829" width="20" height="20" transform="translate(-0.14 -0.14)" fill="none"/>
              <g id="Group_2545" data-name="Group 2545" transform="translate(3.147 4.107)">
                <g id="Path_1315" data-name="Path 1315" transform="translate(0 0)">
                  <path id="Path_14" data-name="Path 14" d="M5.662,0A5.625,5.625,0,1,1,0,5.624,5.644,5.644,0,0,1,5.662,0Z" transform="translate(0 0)" fill="none"/>
                  <path id="Path_15" data-name="Path 15" d="M5.663,1.187a4.438,4.438,0,1,0,4.468,4.438A4.458,4.458,0,0,0,5.663,1.187M5.663,0A5.625,5.625,0,1,1,0,5.625,5.644,5.644,0,0,1,5.663,0Z" transform="translate(0 0)" fill="#303030"/>
                </g>
                <path id="Path_1188" data-name="Path 1188" d="M-1895.42-1888l3.006,3.036" transform="translate(1905.148 1897)" fill="none" stroke="#303030" stroke-width="1.5"/>
              </g>
            </g>
          </svg></i>
        <input type="text" placeholder="Search here..." className="bg-white  w-fit px-12 rounded-lg focus:outline-none hover:cursor-pointer" name="" />
       
        <div className="ml-auto mr-4 flex">
            <svg id="Component_39_2_" data-name="Component 39 (2)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
                <rect id="Rectangle_1829" data-name="Rectangle 1829" width="26" height="26" fill="none"/>
                <g id="Group_26" data-name="Group 26">
                  <line id="Line_5" data-name="Line 5" x2="15" transform="translate(5.5 6.5)" fill="none" stroke="#303030" stroke-width="1.5"/>
                  <line id="Line_6" data-name="Line 6" x2="15" transform="translate(5.5 12.5)" fill="none" stroke="#303030" stroke-width="1.5"/>
                  <line id="Line_7" data-name="Line 7" x2="15" transform="translate(5.5 18.5)" fill="none" stroke="#303030" stroke-width="1.5"/>
                  <g id="Ellipse_4" data-name="Ellipse 4" transform="translate(7 4)" fill="#fbfbfb" stroke="#303030" stroke-width="1">
                    <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
                    <circle cx="2.5" cy="2.5" r="2" fill="none"/>
                  </g>
                  <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(14 10)" fill="#fbfbfb" stroke="#303030" stroke-width="1">
                    <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
                    <circle cx="2.5" cy="2.5" r="2" fill="none"/>
                  </g>
                  <g id="Ellipse_6" data-name="Ellipse 6" transform="translate(8 16)" fill="#fbfbfb" stroke="#303030" stroke-width="1">
                    <circle cx="2.5" cy="2.5" r="2.5" stroke="none"/>
                    <circle cx="2.5" cy="2.5" r="2" fill="none"/>
                  </g>
                </g>
              </svg>
              <span>Filters</span>
        </div>
    </div>
    {cardData.map((item) => <Cards key={item.id} smallImgURL={item.smallimage} largeImgURL={item.largeimage} Name={item.name} Email={item.email}/>)}

      <div className='horizontalCards flex gap-5 flex-nowrap  w-[650px] overflow-x-scroll h-fit' >
{ratingData.map((item) => <Cards1 key={item.id} imageURL={item.image}/>)}
</div>
    </div>
  );
};

export default Searchbar;
