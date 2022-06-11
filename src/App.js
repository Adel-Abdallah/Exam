import "./App.css";

import AllProducts from "./pages/AllProducts";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all-products' element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
