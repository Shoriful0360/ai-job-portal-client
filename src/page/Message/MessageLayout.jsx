import React from 'react';
import LeftSideMessage from './component/LeftSideMessage';
import { Outlet } from 'react-router';

const MessageLayout = () => {
    return (
        <div className="  h-[calc(100vh-80px)]">
        <div className="  md:flex h-full p-4 max-w-[1600px] md:p-10 mx-auto gap-6">
         <div className="    ">
             <LeftSideMessage/>
         </div>
         
         <div className="flex-1 overflow-y-auto pr-2">
             <Outlet/>
         </div>
     
       </div>
      </div>
    );
};


export default MessageLayout;