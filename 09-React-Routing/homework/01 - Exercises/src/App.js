import React from "react";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Promotions from "./components/Promotions/Promotions.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import {BrowserRouter,Routes,Route} from "react-router-dom";
/* eslint-disable */

export default function App() {
  return (
<div>
  <NavBar>  </NavBar>
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/shipping"  element={<Shipping />}></Route>
    <Route path="/promotions" element={<Promotions />}></Route>
    <Route path="/cruises/:id" element={<CardDetail />}></Route>
  </Routes>
</div>

  );
}
