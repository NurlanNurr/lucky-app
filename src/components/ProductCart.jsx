import React, { useState } from 'react'
import { AddCart } from '../redux/cartSystem'
import { AddHeartCart, RemoveFromHeartCart } from '../redux/cartSystem';
import { useDispatch, useSelector } from 'react-redux';
import LogoFilled from '../assets/images/icon/heart-filled.svg'
import Logo from '../assets/images/icon/heart-outline.svg'


const ProductCart = ({
  id,
  productName,
  price,
  imageUrl,
  quantity
}
) => {
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(
      AddCart({
        id,
        productName,
        price,
        imageUrl,
      })
    );
  };
  const heartcartObject = useSelector((state) => state.user.heartcart);
  const heartcart = Object.values(heartcartObject);
  const isWishlist = heartcart.find(p => p.id === id)
  const handleHeartClick = () => {
    if (isWishlist) {
      dispatch(
        RemoveFromHeartCart({ id }),
      );
    } else {
      dispatch(
        AddHeartCart({
          id,
          productName,
          price,
          imageUrl,
        }),
      );
    }
  };



  return (
    <div className='w-[310px] h-[420px] bg-white flex flex-col justify-center items-center'>
      <div className=' svg_heart flex justify-end w-full  pr-[12px]'>
        <img onClick={handleHeartClick} src={isWishlist ? LogoFilled : Logo}
          alt="heart" />
      </div>
      <div className='w-[200px] h-[200px]'><img src={imageUrl} alt="JDFV" /></div>
      <p className=' pt-[35px] pb-[15px]'>{productName}</p>
      <span className='pb-[15px]'>{price.toFixed(2)} Azn</span>
      <p>{quantity}</p>
      <button onClick={handleButtonClick} className='  h-[47px] py-[10px] px-[20px] rounded-md border-2 text-black hover:bg-[#106853] hover:text-white hover:border-[#106853] transition ease-in-out duration-200  '>Səbətə at</button>
    </div>
  )
}

export default ProductCart