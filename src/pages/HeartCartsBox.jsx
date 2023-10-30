import ProductCart from "../components/ProductCart";
import { useSelector } from "react-redux";
import React from "react";
const HeartCartsBox = ({}) => {
    const heartcartObject = useSelector((state) => state.user.heartcart);
    const heartcart = Object.values(heartcartObject);

    return (
        <>
            {heartcart.length === 0 ? (
                <div className="lg:w-[1170px]  w-full  my-0 mx-auto  pr-[15px] pl-[15px] flex justify-between items-end ">
                    <div className='flex justify-center items-center w-full h-[200px]'>
                        <h1>Sizin səbətiniz boşdur!</h1>
                    </div>
                </div>
            ) : (
                heartcart.map((product) => (
                    <>
                        <ProductCart
                            id={product.id}
                            productName={product.productName}
                            price={product.price}
                            key={product.id}
                            imageUrl={product.imageUrl}
                        />
                    </>

                ))
            )}
        </>
    );
};

export default HeartCartsBox;