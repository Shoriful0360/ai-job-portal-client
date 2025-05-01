import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import LoadingSpinner from "../shared/LoadingSpinner";

import { Virtual, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";


const Review = () => {
    const axiosSecure = UseAxios()
    const { data: verifiedReview = [], refetch, isLoading } = useQuery
        ({
            queryKey: ['verifiedReview'],
            queryFn: async () => {
                const { data } = await axiosSecure.get('/verifiedReview')
                return data
            }
        })
    const allVerifiedReview = verifiedReview.sort((first, second) => new Date(second.reviewTime) - new Date(first.reviewTime))
    console.log(verifiedReview)
    if (isLoading) return <LoadingSpinner />

    return (
        <div className=" px-4 sm:px-10">
            <div className="sm:my-10">
                <h3 className='text-3xl font-bold text-center my-3'>
                    What Our Users Say
                </h3>
                <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>
                    Read authentic reviews from real users sharing their experiences. Your feedback helps
                    <br className="hidden sm:inline" /> us grow and serve you better every day.
                </p>
            </div>

            <div className="mt-auto">
                <Swiper
                    modules={[Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        480: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                        
                    }}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }}
                    speed={5000}
                    grabCursor={false}
                    allowTouchMove={false}
                    freeMode={true}
                >
                    {allVerifiedReview.map((slideContent, index) => (
                        <SwiperSlide key={slideContent._id} virtualIndex={index}>
                            <div className="relative py-16 h-full" >
                                <img className=" absolute rounded-full border-4 border-white top-4 w-28 h-28 bg-white left-36 md:left-28 lg:left-44" src={slideContent.image} alt="" />
                                <div className="bg-gray-300 rounded-xl py-12 text-gray-700 px-6 h-full">
                                    <p className="text-5xl "><RiDoubleQuotesL /></p>
                                    <p className="text-sm font-bold text-center">{slideContent.review}</p>
                                    <p className="text-5xl  ml-[290px] md:ml-[235px]  lg:ml-[335px]"><RiDoubleQuotesR /></p>
                                    <p className="text-lg font-bold text-center  text-black">{slideContent.name}</p>
                                    <p className="text-sm font-bold text-center mb-5 text-black">{slideContent.profession}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default Review;