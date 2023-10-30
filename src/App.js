import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Details from "./pages/Details"
import Products from "./pages/Products";
import Səbət from "./pages/Səbət";
import HeartCartsBox from "./pages/HeartCartsBox";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
      <Route path="/products" element={<Products/>}/>  
      <Route path="/products/:categoryName" element={<Products/>}/>  
      <Route path="/products/:categoryName/:subcategoryName" element={<Products/>}/>
      <Route path="/səbət" element={<Səbət />} />
      <Route path="/heartcartsbox" element={<HeartCartsBox />} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
