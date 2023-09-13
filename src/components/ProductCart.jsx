import React from 'react'

const ProductCart = ({
  id,
  productName,
  price,
  imageUrl
}
) => {
  return (
    <div className='w-[310px] h-[420px] bg-white flex flex-col justify-center items-center'>
      <div className=' svg_heart flex justify-end w-full pr-[12px]'>
      <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="file: mt-4 h-4 w-5  text-white mb-3"
                    className=" w-9 h-6 text-center ml-[5.5px] text-[#f15803]"
                  >
                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181" />
                  </svg>
      </div>
      <div className='w-[200px] h-[200px]'><img src={imageUrl} alt="" /></div>
      <p className=' pt-[35px] pb-[15px]'>{productName}</p> 
      <span className='pb-[15px]'>{price} Azn</span>
      <button className='  h-[47px] py-[10px] px-[20px] rounded-md border-2 text-black hover:bg-[#106853] hover:text-white hover:border-[#106853] transition ease-in-out duration-200  '>Səbətə at</button>
    </div>
  )
}

export default ProductCart