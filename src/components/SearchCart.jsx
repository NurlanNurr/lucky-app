import React from "react";
import { Link } from "react-router-dom";
const SearchCart = ({ productName, imageUrl, id, price, oldprice }) => {
    return (
        <div className="border-t-[1px] pb-[5px]">
            <div className=" w-full flex items-center p-[10px]">
                <div className="w-[50%] flex items-center justify-center  ">
                    <img
                        className="w-[200px] cursor-pointer object-cover"
                        src={imageUrl}
                        alt="noimg"
                    />
                </div>
                <div className="w-[50%] text-left flex justify-center items-center flex-col">
                    <Link to={`/details/${id}`}>
                    <p className=' pt-[35px] pb-[15px]'>{productName}</p>
                    </Link>
                    <div>
                    <span className='pb-[15px]'>{price.toFixed(2)} Azn</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCart;