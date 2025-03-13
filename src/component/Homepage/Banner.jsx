import React from 'react';

const Banner = () => {
    return (
        <div
  className=" h-[600px] bg-cover flex items-center bg-center"
  style={{
    backgroundImage: "url(https://utouchdesign.com/themes/envato/escort/assets/img/slider_bg.jpg)",
  }}>

  <div className="max-w-4xl  mx-4 text-white ">
    <div className="">
      <h1 className="mb-5 lg:text-7xl text-3xl font-bold">Search Between More <br />
      Then <span className='text-[#30AB62] bg-[#384A3B] rounded-md px-2 lg:text-6xl font-bold '> 5000+</span> Open Jobs
      </h1>
    <div className='lg:flex gap-2 items-center'>
        <p className='text-xl font-bold'>Trending Jobs Keywords: </p>
        <div className='lg:flex *:my-2 '>
            <button className='opacity-90 bg-[#384A3B] text-[#30AB62] px-2 py-1 rounded font-bold'>Web Developer</button>
            <button className='opacity-90 bg-[#384A3B] text-[#30AB62] px-2 py-1 rounded font-bold ml-2'>Web Designer</button>
            <button className='opacity-90 bg-[#384A3B] text-[#30AB62] px-2 py-1 rounded font-bold ml-2'>IOS Developer</button>
            <button className='opacity-90 bg-[#384A3B] text-[#30AB62] px-2 py-1 rounded font-bold ml-2'>Android Developer</button>
           
        </div>
    </div>
     
    </div>
  </div>
</div>
    );
};

export default Banner;