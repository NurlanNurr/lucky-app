import React from 'react'
import Slidercomp from '../components/Slidercomp'
import '../assets/styles/allstyle.scss'
import SliderforOffice from '../components/SliderforOffice'
import { Link } from 'react-router-dom'
import coverkagiz from "../assets/images/category-cover/cover-kagiz.jpg"
import coverqelem from "../assets/images/category-cover/cover-qelem.png"
import coverqovluq from "../assets/images/category-cover/cover-qovluq.jpg"
import covermarker from "../assets/images/category-cover/cover-marker.jpg"
import coverstepler from "../assets/images/category-cover/cover-stepler.jpg"
import coverpozan from "../assets/images/category-cover/cover-pozan.jpg"
import CategoryCartOrange from '../components/CategoryCartOrange'


const Home = () => {
  return (
    <>
      <Slidercomp />

      <section >
        <div className='bgimg  pb-[60px] '>
          <div className='w-full flex items-center pt-[60px] justify-center flex-col gap-[15px]'>
            <h2 className='text-3xl '>Ofis Ləvazimatları</h2>
            <div className='w-[30px] h-[5px] bg-[#106853] rounded'></div>
          </div>
          <SliderforOffice />
        </div>
      </section>
      <CategoryCartOrange/>




    



    </>
  )
}

export default Home