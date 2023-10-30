import React from 'react';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/Searchbar';
import RightSidebar from '../components/rightSidebar';
const UiPage = () => {
  return (
          <div className="flex justify-center h-full w-full bg-[#F5F5F5] ">
          <Sidebar />
          <SearchBar/>
         <RightSidebar />
         </div>
  )
}

export default UiPage
