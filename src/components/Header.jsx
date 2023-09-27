import React from 'react'
import Pagecontainer from './Container'
import { FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import '../assets/styles/allstyle.scss'
import { Link } from 'react-router-dom';
import { categoryArray } from './data/CategoryData';
import { subcategoryArray } from './data/SubcategoryDatas';

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
               
                <ul className="  bg-white shadow   flex flex-col items-start  ">
                  {categoryArray?.length > 0 &&
                    categoryArray
                      .filter((item) => item.id === 1)
                      .map((product) => (
                        <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                          <Link
                            to=""
                            className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                          >
                            <img src={product.icon} alt="" />
                            {product.name}
                          </Link>
                          <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                            <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                              {subcategoryArray?.length > 0 &&
                                subcategoryArray
                                  .filter((item) => item.categoryID === 1)
                                  .map((product) => (
                                    <li className="w-[32%] ">
                                      <Link
                                        to=""
                                        className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                      >
                                        {product.name}
                                      </Link>
                                    </li>
                                  ))}
                            </div>
                          </ul>
                        </li>
                      ))}
                  {categoryArray?.length > 0 &&
                    categoryArray
                      .filter((item) => item.id === 2)
                      .map((product) => (
                        <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                          <Link
                            to=""
                            className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                          >
                            <img
                              src={product.icon}
                              alt=""
                              className="w-[18px] h-[18px]"
                            />
                            {product.name}
                          </Link>
                          <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                            <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                              {subcategoryArray?.length > 0 &&
                                subcategoryArray
                                  .filter((item) => item.categoryID === 2)
                                  .map((product) => (
                                    <li className="w-[32%] ">
                                      <Link
                                        to=""
                                        className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                      >
                                        {product.name}
                                      </Link>
                                    </li>
                                  ))}
                            </div>
                          </ul>
                        </li>
                      ))}
                  {categoryArray?.length > 0 &&
                    categoryArray
                      .filter((item) => item.id === 3)
                      .map((product) => (
                        <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un ">
                          <Link
                            to=""
                            className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                          >
                            <img src={product.icon} alt="" />
                            {product.name}
                          </Link>
                          <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                            <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                              {subcategoryArray?.length > 0 &&
                                subcategoryArray
                                  .filter((item) => item.categoryID === 3)
                                  .map((product) => (
                                    <li className="w-[32%] ">
                                      <Link
                                        to=""
                                        className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                      >
                                        {product.name}
                                      </Link>
                                    </li>
                                  ))}
                            </div>
                          </ul>
                        </li>
                      ))}
                  {categoryArray?.length > 0 &&
                    categoryArray
                      .filter((item) => item.id === 4)
                      .map((product) => (
                        <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                          <Link
                            to=""
                            className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                          >
                            <img
                              src={product.icon}
                              alt=""
                              className="w-[18px] h-[18px]"
                            />
                            {product.name}
                          </Link>
                          <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                            <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                              {subcategoryArray?.length > 0 &&
                                subcategoryArray
                                  .filter((item) => item.categoryID === 4)
                                  .map((product) => (
                                    <li className="w-[32%] ">
                                      <Link
                                        to=""
                                        className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                      >
                                        {product.name}
                                      </Link>
                                    </li>
                                  ))}
                            </div>
                          </ul>
                        </li>
                      ))}
                  {categoryArray?.length > 0 &&
                    categoryArray
                      .filter((item) => item.id === 5)
                      .map((product) => (
                        <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                          <Link
                            to=""


                            className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                          >
                            <img
                              src={product.icon}
                              alt=""
                              className="w-[18px] h-[18px]"
                            />
                            {product.name}
                          </Link>
                          <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                            <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                              {subcategoryArray?.length > 0 &&
                                subcategoryArray
                                  .filter((item) => item.categoryID === 5)
                                  .map((product) => (
                                    <li className="w-[32%] ">
                                      <Link
                                        to=""
                                        className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                      >
                                        {product.name}
                                      </Link>
                                    </li>
                                  ))}
                            </div>
                          </ul>
                        </li>
                      ))}
                  {categoryArray?.length > 0 &&
                    categoryArray
                      .filter((item) => item.id === 6)
                      .map((product) => (
                        <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                          <Link
                            to=""
                            className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                          >
                            <img
                              src={product.icon}
                              alt=""
                              className="w-[18px] h-[18px]"
                            />
                            {product.name}
                          </Link>
                          <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                            <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                              {subcategoryArray?.length > 0 &&
                                subcategoryArray
                                  .filter((item) => item.categoryID === 6)
                                  .map((product) => (
                                    <li className="w-[32%] ">
                                      <Link
                                        to=""
                                        className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                      >
                                        {product.name}
                                      </Link>
                                    </li>
                                  ))}
                            </div>
                          </ul>
                        </li>
                      ))}
                  {categoryArray?.length > 0 &&
                    categoryArray
                      .filter((item) => item.id === 7)
                      .map((product) => (
                        <li className="py-[4px] px-12 border-b-[1px] w-full flex onedrop un">
                          <Link
                            to="" className="  flex gap-2 items-center py-[10px] text-[18px] text-[#303030] font-montserrat font-sans  "
                          >
                            <img
                              src={product.icon}
                              alt=""
                              className="w-[18px] h-[18px]"
                            />
                            {product.name}
                          </Link>
                          <ul className=" absolute top-0 left-[100%] w-[213%] h-full shadow-lg bg-white  hidden onechild ">
                            <div className="flex flex-col flex-wrap w-full h-full px-[20px] py-[10px] ">
                              {subcategoryArray?.length > 0 &&
                                subcategoryArray
                                  .filter((item) => item.categoryID === 7)
                                  .map((product) => (
                                    <li className="w-[32%] ">
                                      <Link
                                        to=""
                                        className=" p-[5px] text-black text-[18px]  font-montserrat font-sans "
                                      >
                                        {product.name}
                                      </Link>
                                    </li>
                                  ))}
                            </div>
                          </ul>
                        </li>
                      ))}
                </ul>
              </div>
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