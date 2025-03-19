import React from 'react';

const Banner = () => {
  return (
    <div
      className=" h-[600px] bg-cover flex items-center bg-center "
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
          {/* search */}
          <div className="join border-16 rounded-[50px]  border-[#5D5955] mt-4 w-full">
            <div className=''>
              <div>
                <input className="input focus:outline-none focus:border-none text-[#6b7c8a] text-base h-16 rounded-l-[50px] " placeholder="Search key Words..." />
              </div>
            </div>
            <select className="select h-16 focus:outline-none focus:border-none text-gray-400  ">
              <option className='text-gray-400' disabled selected>Location</option>
              <option>All Country</option>
              <option>Bangladesh</option>
              <option>India</option>
              <option>USA</option>
              <option>Canada</option>
              <option>Pakistan</option>
            </select>
            <select className="select focus:outline-none focus:border-none h-16  text-[#6b7c8a] join-item">
              <option disabled selected>Category</option>
              <option>IT & Software</option>
              <option>Business & Marketing</option>
              <option>Education & Training</option>
              <option>Legal & Law</option>
            </select>
            <div className="indicator">

              <button className="btn h-16   px-5 text-white rounded-r-[50px] bg-[#26AE61] join-item">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;