import React, { createContext } from 'react'
import { categoryArray } from '../data/CategoryData';
import { subcategoryArray } from '../data/SubcategoryDatas';
import { ProductsDatas } from '../data/ProductDatas';
import { orangeSectionData } from '../data/OrangeGreenData';

export const MainContext = createContext();

function MainContextProvider({children}) {
  return (
    <MainContext.Provider value={{categoryArray, subcategoryArray, ProductsDatas, orangeSectionData}}>
        {children}
    </MainContext.Provider>
  )
}

export default MainContextProvider