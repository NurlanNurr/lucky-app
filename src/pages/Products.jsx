import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categoryArray } from "../components/data/CategoryData";
import { ProductsDatas } from "../components/data/ProductDatas";
import { subcategoryArray } from "../components/data/SubcategoryDatas"; 
import Leftfilter from "../components/productfilter/Leftfilter";
import Leftfilterall from "../components/productfilter/Leftfilterall";
import Topfilter from "../components/productfilter/Topfilter";
import ProductCart from "../components/ProductCart";
import Pagination from "../components/Pagination";

function Products() {
  const { categoryName } = useParams();
  const { subcategoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage, setRecordsPerPage] = useState(6)

  useEffect(() => {
    if (categoryName && !subcategoryName) {
      let category = categoryArray.find(
        (category) => category.name === categoryName
      );
      setCategory(category)
      if (category) {
        let filteredProducts = ProductsDatas.filter(
          (product) => product.categoryID === category.id
        );
        setProducts([...filteredProducts]);
      }
    } 
    else if (categoryName && subcategoryName) {
      let category = categoryArray.find(
        (category) => category.name === categoryName
      );
      let subcategory = subcategoryArray.find(
        (subcategory) => subcategory.name === subcategoryName
      );
      if (category && subcategory) {
        let filteredProducts = ProductsDatas.filter(
          (product) => product.subcategoryID === subcategory.id
        );
        setProducts([...filteredProducts]);
      }
    }
    
  }, [categoryName, subcategoryName, categoryArray, ProductsDatas]);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = products.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(products.length / recordsPerPage)

  return (
    <>
      <section className="bg-[#dfdfdf]">
        <div className="w-[1320px] mx-auto pl-[10px] pr-[10px] flex items-center flex-col justify-center ">
          <div className="mt-[20px] text-[35px] capitalize  ">
            {subcategoryName}
          </div>
          <div className="w-[100%] flex flex-wrap gap-[13px] mt-[60px]">
            <div
              className={` flex items-start flex-row justify-center mb-[40px] w-[33%] ${
                categoryName && !subcategoryName ? "hidden" : "block"
              }`}
            >
              <Leftfilter />
            </div>
            <div
              className={` flex items-start flex-row justify-center mb-[40px] w-[33%] ${
                categoryName && !subcategoryName ? "block" : "hidden"
              }`}
            >
              <Leftfilterall category={category}  setProducts={setProducts}/>
            </div>
            <div className="flex items-start flex-col justify-center mb-[40px] w-[66%]">
              <div className="inner flex  items-center flex-col justify-center w-[100%]">
                <div className="product-row w-[100%] flex flex-wrap">
                  <Topfilter setRecordsPerPage={setRecordsPerPage} products={products}  setProducts={setProducts}   />
                  <div className="flex flex-row flex-wrap   gap-x-[30px] gap-y-[10px] items-start  mb-[40px] w-[100%] ">
                    {currentRecords.map((product) => (
                      <ProductCart
                        id={product.id}
                        productName={product.name}
                        price={product.price}
                        imageUrl={product.img}
                        key={product.id}
                      />
                    ))}
                     <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />       
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;