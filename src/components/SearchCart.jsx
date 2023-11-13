import React from "react";
import { Link } from "react-router-dom";
const SearchCart = ({ productName, imageUrl, id, price, oldprice }) => {
    return (
        // <div className="bg-[#4fff] w-[800px] h-[500px] flex  mb-[20px] flex-col  z-[9999] absolute ">
        //     <img
        //         className="w-[184px] h-[184px] object-cover border-none"
        //         src={`http://localhost:5000/${imageUrl}`}
        //         alt="noimg"
        //     />
        //     <h3 style={{ color: "#000" }}>{productName}</h3>
        // </div>
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