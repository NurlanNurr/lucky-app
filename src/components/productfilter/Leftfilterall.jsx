import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/AllContextProvider";
import "../../assets/styles/allstyle.scss";


const Leftfilterall = ({ category, setProducts }) => {

  const { subcategoryArray, ProductsDatas } = useContext(MainContext);
  const [subcategories, setSubCategories] = useState([]);
  const [selectedSubCategoryID, setSelectedSubCategoryID] = useState([]);

  useEffect(() => {
    if (category) {
      let filteredSubcategories = subcategoryArray.filter(
        (sb) => sb.categoryID === category.id
      );
      setSubCategories([...filteredSubcategories]);
    }
  }, [category, subcategoryArray]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSubCategoryID.length > 0) {
      const fiteredResult = ProductsDatas.filter((products) => selectedSubCategoryID.includes(products.subcategoryID)
      );
      setProducts(fiteredResult)
    }
    else {
      setProducts([...ProductsDatas])
    }
  }

  const filterBySubcategory = (e) => {
    let newId = parseInt(e.target.value)
    if (e.target.checked) {
      setSelectedSubCategoryID((prevIDs) => [...prevIDs, newId])
    }
    else {
      setSelectedSubCategoryID((prevIDs) => prevIDs.filter((item) => item !== newId))
    }

  };




  return (
    <>
      <div className="flex justify-center flex-col w-[100%] items-center bg-white">
        <form action="" onSubmit={handleSubmit}>

          <div className="subcategory-filter">
            <h4 className="section-title">sub categoriyaya gore filter</h4>
            {subcategories.map((subcategory) => (
              <div key={subcategory.id} className="form-check">
                <input
                  type="checkbox"
                  onChange={filterBySubcategory}
                  className="form-check-input"
                  value={subcategory.id}
                />
                <label className="form-check-label" htmlFor={subcategory.name}>
                  {subcategory.name}
                </label>
              </div>
            ))}
          </div>
          <button>klik</button>
        </form>

      </div >
    </>
  );
};

export default Leftfilterall;
