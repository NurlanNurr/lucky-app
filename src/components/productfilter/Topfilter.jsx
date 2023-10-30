import React from "react";

const Topfilter = ({ setRecordsPerPage, products }) => {


  const handleSortChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "cheapToExp") {
      products.sort((a, b) => a.price - b.price);
    
    } else if (selectedValue === "expToCheap") {
      products.sort((a, b) => b.price - a.price);
    }

    setRecordsPerPage(products);
  };

  return (
    <>
      <div className="flex items-start flex-row justify-center mb-[40px] w-[100%]">
        <div className="product-top-filter flex flex-row justify-between px-[15px] mb-[30px] shadow-lg h-auto py-[25px] w-[100%] bg-[white]">
          <div className="w-[100%]">
            <span className="mr-[10px]">Saya Gore</span>
            <select
              onChange={(e) => setRecordsPerPage(e.target.value)}
              className="rounded-lg border-[#106853] border-[1px] max-w-[200px] py-[5px] px-[10px] w-[100%]"
            >
              <option value="12">6</option>
              <option value="18">10</option>
              <option value="24">14</option>
              <option value="30">18</option>
            </select>
          </div>
          <div className="flex justify-end items-center w-[100%]">
            <span className="mr-[10px]">Qiymete Gore</span>
            <select
              onChange={handleSortChange} 
              className="rounded-lg border-[#106853] border-[1px] max-w-[200px] py-[5px] px-[10px] w-[100%]"
            >
              <option value="choose" disabled>
                Sec
              </option>
              <option value="cheapToExp">Ucuzadan Bahaya</option>
              <option value="expToCheap">Bahadan Ucuza</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topfilter;