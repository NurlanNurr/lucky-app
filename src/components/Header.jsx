import React, { useState } from 'react'
import Pagecontainer from './Container'
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import '../assets/styles/allstyle.scss'
import { Link } from 'react-router-dom';
import { categoryArray } from './data/CategoryData';
import { subcategoryArray } from './data/SubcategoryDatas';
import Subcategorylist from './Subcategorylist';
import { useSelector } from "react-redux";
import Leftfilterall from './productfilter/Leftfilterall';

const Header = () => {
  const cartObject = useSelector((state) => state.user.cart);
  const cart = Object.values(cartObject);

  const [activeCategoryID, setActiveCategoryID] = useState(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(null);

  const openSubMenu = (categoryId) => {
    setActiveCategoryID(categoryId);
  };

  const closeSubMenu = () => {
    setActiveCategoryID(null);
  };

  const closeCatMenu = () => {
    setIsDropdownVisible(true);
  };
  const openCatMenu = () => {
    setIsDropdownVisible(false);
  };

  const heartcartObject = useSelector((state) => state.user.heartcart);



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
              <Link to="/">
                <img src={require('../assets/images/MainLogo.png')} alt="kvdjf" />
              </Link>
            </div>
            <div>
              <input placeholder='Axtar' type="text" className='focus:outline-none w-[650px]  h-[55px] caret-white text-white py-[5px] px-[40px]  rounded-md placeholder:text-[white] bg-transparent border-2' />
            </div>
            <div className='flex gap-[16px]'>
              <div >
                <Link to="/Səbət">
                  <FaShoppingCart className='text-white w-8  h-8' />
                  <span>{cart.length}</span>
                </Link>
              </div>

              <div>
              <Link to="/HeartCartsBox">
                <FaHeart className='text-[white] w-8 h-8' />
                {heartcartObject.length}
                </Link>
                </div>
            </div>
          </div>
        </Pagecontainer>
        <div className='relative' >
          <ul className='flex justify-between items-center pr-[200px] '>
            <li  className='dropdown_category w-[550px] text-white h-[65px] items-center flex justify-center bg-[#106853] ' onMouseEnter={openCatMenu} >
              Kateqoriyalar
              <ul
                className={` bg-white shadow flex flex-col dropdown_category_child items-start w-[438px] h-[398px] text-black bg-white border-2 absolute top-[65px] left-28 hidden z-[100] ${
                  isDropdownVisible ? 'z-[-10]' : ''
                }`}
              >
                  {categoryArray?.length > 0 &&
                    categoryArray.map((category) => (
                      <li   className=" py-[4px] px-12 border-b-[1px] w-full flex onedrop un" onClick={closeCatMenu} onMouseEnter={() => openSubMenu(category.id)} onMouseLeave={closeSubMenu} >
                        <Link
                          to={`/products/${encodeURIComponent(category.name)}`}
                          className=" flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                          
                        >
                          <img className='w-[10px] h-[10px]' src={category.icon} alt="catname"/>
                          {category.name}
                        </Link>

                        <div className={`${activeCategoryID === category.id ? 'flex absolute bottom-0 left-[435px]' : 'hidden absolute bottom-0 left-[500px]'}`}>

                          <Subcategorylist category={category} closeSubMenu={closeSubMenu}  />
                       
                        </div>
                      </li>

                    ))}
                </ul>
            </li>
            <li className='text-white a'>Haqqımızda</li>
            <li className='text-white a'>Yeni</li>
            <li className='text-white a'>Endirimlər</li>
            <li className='text-white a'>Ən çox satılanlar</li>
            <li className=' dropdown_category flex items-center  '>
              <a href="" className='a text-white '>Şərtlər</a>
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

      </div >
    </>
  )
}

export default Header