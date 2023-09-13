import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import { ProductsDatas } from './ProductDatas';
import ProductCart from './ProductCart';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Pagecontainer from './Container';

const SliderforOffice = () => {

  return (
    <Pagecontainer>
      <div className='lg:mt-[0px] mt-[20px] pt-[30px] pb-[30px]'>
        <Swiper
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={true}
          navigation
          // className='w-full'
        >


          {ProductsDatas?.length > 0 &&
            ProductsDatas.map((product) => (
              <SwiperSlide>
                <ProductCart
                  id={product.id}
                  productName={product.name}
                  price={product.price}
                  key={product.id}
                />
              </SwiperSlide>
            ))}



        </Swiper>
      </div>
    </Pagecontainer>
  )
}

export default SliderforOffice