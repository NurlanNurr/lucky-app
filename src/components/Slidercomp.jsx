import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Pagecontainer from './Container';

const Slidercomp = () => {
    
  return (
    <Pagecontainer>
    <div className='lg:mt-[0px] mt-[20px] pt-[30px] pb-[30px]'>
          <Swiper
       modules={[Navigation, Pagination,  Keyboard ,  Autoplay ]}
       spaceBetween={50}
       slidesPerView={1}
       autoplay ={true}
       navigation
       className='w-full'
    >
      <SwiperSlide><div className='border-t  border-black'><img className=' object-cover  w-full'  src={require('../assets/images/sliderr1.jpg')} alt="" /></div></SwiperSlide>
      <SwiperSlide><div className='border-t  border-black'><img className=' object-cover' src={require('../assets/images/sliderr2.jpg')} alt="" /></div></SwiperSlide>
    
    </Swiper>
    </div>
    </Pagecontainer>
  )
}

export default Slidercomp