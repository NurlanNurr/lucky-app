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
  quantity,
  isNew,
  oldPrice,
  discount,
  bestSeller
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
      <div className=' svg_heart flex justify-end w-full gap-[10px]  pr-[12px]'>
        {
          isNew && <span className="product-badge bg-[#106853] p-[2px] rounded text-white">Yeni</span>
        }

        {
          bestSeller && <span className="product-badge bg-[#106853] p-[2px] rounded text-white">Çox satılan</span>
        }

{
          discount && <span className="product-badge bg-[#106853] p-[2px] rounded text-white">Endirmli</span>
        }
        <img onClick={handleHeartClick} src={isWishlist ? LogoFilled : Logo}
          alt="heart" />
      </div>
      <div className='w-[200px] h-[200px]'><img src={imageUrl} alt="JDFV" /></div>
      <p className=' pt-[35px] pb-[15px]'>{productName}</p>


      <div className='price'>
        {
          discount ? (
            <>
              <span className='new'>{price.toFixed(2)} Azn</span>
              <span className='old line-through'>{oldPrice.toFixed(2)} Azn</span>
            </>
          ) : (
            <span className='new'>{price.toFixed(2)} Azn</span>
          )
        }

      </div>





      <p>{quantity}</p>
      <button onClick={handleButtonClick} className='  h-[47px] py-[10px] px-[20px] rounded-md border-2 text-black hover:bg-[#106853] hover:text-white hover:border-[#106853] transition ease-in-out duration-200  '>Səbətə at</button>
    </div>
  )
}

export default ProductCart