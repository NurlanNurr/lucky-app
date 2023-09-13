import React from 'react'
import Pagecontainer from './Container'
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import '../assets/styles/allstyle.scss'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className=' mainn '>

        <Pagecontainer>
          <div className='flex justify-end gap-[20px] py-[15px]'>
            <button className='  h-[47px] py-[10px] px-[20px] rounded-md border-2 text-white hover:bg-[#106853] hover:border-[#106853] transition ease-in-out duration-200  '>Daxil ol</button>
            <button className='  h-[47px] py-[10px] px-[20px] rounded-md   bg-white text-[#106853] hover:bg-[#106853] hover:text-white  transition ease-in-out duration-200  '> Qeydiyyat</button>
          </div>

          <div className='flex justify-between items-center mb-[17px]'>
            <div className="logo w-28  h-28 flex items-center ">
              <img src={require('../assets/images/MainLogo.png')} alt="kvdjf" />
            </div>
            <div>
              <input placeholder='Axtar' type="text" className='focus:outline-none w-[650px]  h-[55px] caret-white text-white py-[5px] px-[40px]  rounded-md placeholder:text-[white] bg-transparent border-2' />
            </div>
            <div className='flex gap-[16px]'>
              <div ><FaShoppingCart className='text-white w-8  h-8' /></div>
              <div><FaHeart className='text-[white] w-8 h-8' /></div>
            </div>
          </div>
        </Pagecontainer>
        <div className='relative' >
          <ul className='flex justify-between items-center pr-[200px] '>
            <li className='dropdown_category w-[550px] text-white h-[65px] items-center flex justify-center bg-[#106853] '>
              Kateqoriyalar
              <div className=' dropdown_category_child w-[438px] h-[398px] text-black bg-white border-2 absolute top-[65px] left-28  hidden z-[10] '>
                <ul className='w-full flex flex-col gap-[16px] pt-[20px] '>
                  <li className='  pb-[16px]  pl-[16px] w-full un '> <Link to=""> Ofis ləvazimatları</Link></li>
                  <li className='  pb-[16px] pl-[16px] w-full un'> <Link to=""> Qida və içkilər</Link></li>
                  <li className='  pb-[16px] pl-[16px] un w-full'> <Link to=""> Təsərrüfat malları</Link></li>
                  <li className=' pb-[16px] pl-[16px] un w-full'> <Link to=""> Elektron avadanlıq</Link></li>
                  <li className='  pb-[16px] pl-[16px] un w-full'> <Link to=""> Dibçək gülləri</Link></li>
                  <li className='  pb-[16px] pl-[16px] un w-full'> <Link to=""> Hədiyyəlik </Link></li>
                  <li className='  pb-[16px] pl-[16px] un w-full'> <Link to=""> Coffee shop</Link></li>
                </ul>
              </div>
            </li>
            <li className='text-white a'>Haqqımızda</li>
            <li className='text-white a'>Yeni</li>
            <li className='text-white a'>Endirimlər</li>
            <li className='text-white a'>Ən çox satılanlar</li>
            <li className='text-white a dropdown_category  '>
              Şərtlər
              <div className=' dropdown_category_child text-black bg-white border-2 absolute top-[65px] right-[235px] hidden  z-[10] '>
                <ul className='w-full flex flex-col gap-[16px] pt-[20px]  '>
                  <li className='  pb-[16px] pr-[16px]  pl-[16px] w-full un '> <Link to=""> Çatdırılma</Link></li>
                  <li className='  pb-[16px] pr-[16px] pl-[16px] w-full un '> <Link to=""> Geri qaytarılma</Link></li>
                </ul>
              </div>
            </li>
            <li className='text-white a'>Əlaqə</li>
          </ul>

        </div>

      </div>
    </>
  )
}

export default Header