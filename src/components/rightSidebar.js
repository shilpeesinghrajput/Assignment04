import React from 'react'
import './rightSidebar.css'
import smallimage from '../assets/img.png';
import smallimage1 from '../assets/smallimg.png';
import smallimage2 from '../assets/smallimg1.png';
import smallimage3 from '../assets/smallimg2.png';
import smallimage4 from '../assets/smallimg3.png';


const RightSidebar = () => {
  return (
          <div>
          <div className="w-[280px] p-[10px] bg-[#F5F5F5] h-full">
          <button className="buttonOne w-full h-[80px] bg-[#88C2BB] my-[30px] text-white">
              Become a Seller
          </button>
          <div className="h-[550px]  p-1 overflow-y-scroll">
  
              <div className="sideCard img1 h-[126px] w-full p-1 flex flex-col-reverse" >
  
                  <div className="flex text-white inside-content">
                      <div className="w-[48px] h-[48px] bg-[#F5F5F5] rounded-lg mr-1">
                              <img src={smallimage1} alt="" />
                      </div>
                      <div>
                          <div className="font-medium">Thomas Edward</div>
                          <p>@thewildwithyou</p>
                      </div>
                  </div>
  
              </div>
              <div className="sideCard img2 h-[126px] w-full p-1 flex flex-col-reverse" >
  
                  <div className="flex text-white inside-content">
                      <div className="w-[48px] h-[48px] bg-[#F5F5F5] rounded-lg mr-1">
                      <img src={smallimage2} alt="" />
                      </div>
                      <div>
                          <div className="font-medium">Thomas Edward</div>
                          <p>@thewildwithyou</p>
                      </div>
                  </div>
  
              </div>
              <div className="sideCard img3 h-[126px] w-full p-1 flex flex-col-reverse" >
  
                  <div className="flex text-white inside-content">
                      <div className="w-[48px] h-[48px] rounded-lg mr-1">
                      <img src={smallimage3} alt="" />     
                      </div>
                      <div>
                          <div className="font-medium">Thomas Edward</div>
                          <p>@thewildwithyou</p>
                      </div>
                  </div>
  
              </div>
              <div className="sideCard img4 h-[126px] w-full p-1 flex flex-col-reverse" >
  
                  <div className="flex text-white inside-content">
                      <div className="w-[48px] h-[48px] bg-[#F5F5F5] rounded-lg mr-1">
                      <img src={smallimage4} alt="" />
                      </div>
                      <div>
                          <div className="font-medium">Thomas Edward</div>
                          <p>@thewildwithyou</p>
                      </div>
                  </div>
  
              </div>
              <div className="sideCard img5 h-[126px] w-full p-1 flex flex-col-reverse" >
  
                  <div className="flex text-white inside-content">
                      <div className="w-[48px] h-[48px] bg-[#F5F5F5] rounded-lg mr-1">
                      <img src={smallimage1} alt="" />
                      </div>
                      <div>
                          <div className="font-medium">Thomas Edward</div>
                          <p>@thewildwithyou</p>
                      </div>
                  </div>
  
              </div>
  
          </div>
          <div className='flex justify-between text-xs pt-4 text-gray-600 '>
      <span className='cursor-pointer' >Privacy </span>
      <span className='cursor-pointer' >Terms of Service</span>
      <span className='cursor-pointer' >Cookie Notice</span>
    </div>
  </div>
  
          </div>
  )
}

export default RightSidebar
