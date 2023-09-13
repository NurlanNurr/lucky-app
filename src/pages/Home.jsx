import React from 'react'
import Slidercomp from '../components/Slidercomp'
import '../assets/styles/allstyle.scss'
import ProductCart from '../components/ProductCart'
import SliderforOffice from '../components/SliderforOffice'

const Home = () => {
  return (
    <>
    <Slidercomp/>
    <section>
      <div className='bgimg  pb-[60px] '>
          <div className='w-full flex items-center pt-[60px] justify-center flex-col gap-[15px]'>
          <h2 className='text-3xl '>Ofis Ləvazimatları</h2>
          <div className='w-[30px] h-[5px] bg-[#106853] rounded'></div>
          </div>
          <SliderforOffice/>
      </div>
    </section>
    </>
  )
}

export default Home