import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { subcategoryArray } from './data/SubcategoryDatas';



function Subcategorylist({category}){
  const [subcategories, setSubcategories] = useState([]);
  
  useEffect(() => {
    let filteredSubcategories = [];
    if(category){
      filteredSubcategories = subcategoryArray.filter((sb) => sb.categoryID === category.id);
    }
    setSubcategories([...filteredSubcategories]);
  },[category])
  return (
    <div className='bg-white w-[500px] h-[396px]'>
         <ul className='flex flex-col flex-wrap h-[396px] gap-[10px] p-[20px] pl-[50px]'>
      {
        subcategories.length > 0 ? (
          subcategories.map(subcategory => (
             
            <li key={subcategory.id}  >
              <Link to={`/products/${encodeURIComponent(category.name)}/${encodeURIComponent(subcategory.name)}`}>
                {subcategory.name.charAt(0).toUpperCase() + subcategory.name.slice(1)}
                </Link>
            </li>
            
          ))
        ) : null
      }
    </ul>
    </div>
  )
}

export default Subcategorylist