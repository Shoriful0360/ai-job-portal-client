import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import pic from '../../../public/Photo/jod-portal.avif'
import pic2 from '../../../public/Photo/job-portal-2.avif'
import pic3 from '../../../public/Photo/job-portal-3.avif'
import pic4 from '../../../public/Photo/job-portal-4.avif'
import pic5 from '../../../public/Photo/job-portal-5.avif'

const Banner = () => {
  return (
    <div className='relative mb-20 '>
      <div className='image-container'>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className=''>
            <img className='h-[350px] lg:h-[650px] md:h-[400px] opacity-85 transform rotate-b-12 image-container lg:w-full    object-cover' src={pic} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-[350px] lg:h-[650px] md:h-[400px] opacity-85 transform rotate-b-12 image-container sm:w-full   object-cover' src={pic2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className='h-[350px] lg:h-[650px] md:h-[400px] opacity-85 transform rotate-b-12 image-container sm:w-full   object-cover' src={pic3} alt="" />
          </SwiperSlide>
          {/* <SwiperSlide>
            <img className='h-[350px] lg:h-[650px] md:h-[400px] opacity-85  transform rotate-b-12 image-container sm:w-full   object-cover' src={pic4} alt="" />
          </SwiperSlide> */}
        </Swiper>
      </div>

      <div className='image-container absolute inset-0  z-30 bg-black opacity-60 '></div>

      <div className='absolute top-20 left-24 z-40 items-center sm:flex md:top-16 md:right-20 lg:top-32 lg:gap-60'>
        <div className=''>
          <h3 className="mb-5 lg:text-3xl text-xl font-bold text-white">Search Between More <br />
            Then <span className='text-blue-700 bg-blue-300 rounded-md px-2 lg:text-3xl font-bold '> 5000+</span> Open Jobs</h3>
          <p className='text-sm sm:text-xl text-white  font-semibold sm:font-bold'>Trending Jobs Keywords: </p>
          <div className='lg:flex *:my-2'>
            <button className='opacity-90  bg-blue-300 text-blue-700 text-sm sm:text-lg px-2  py-1 rounded font-semibold sm:font-bold mr-1'>Web Developer</button>
            <button className='opacity-90  bg-blue-300 text-blue-700 text-sm sm:text-lg px-2  py-1 rounded font-semibold sm:font-bold mr-1'>Web Designer</button>
            <button className='opacity-90  bg-blue-300 text-blue-700 text-sm sm:text-lg px-2  py-1 rounded font-semibold sm:font-bold mr-1'>IOS Developer</button>
            <button className='opacity-90 bg-blue-300 text-blue-700 text-sm sm:text-lg px-2  py-1 rounded font-semibold sm:font-bold mr-1'>Android Developer</button>
          </div>
        </div>
        <div>
          <img
            className='w-96 hidden sm:inline border-12 border-white'
            src={pic5} alt="" />
        </div>
      </div>

    </div>

    

  );
};

export default Banner;