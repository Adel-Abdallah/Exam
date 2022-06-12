import "./App.css";

import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import DetailProducts from "./pages/Details";
import Header from "./components/Header/index";
import PageNotFound from "./pages/PageNotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/detailProduct' element={<DetailProducts />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
