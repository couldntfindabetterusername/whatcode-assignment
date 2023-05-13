import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Cities from "./components/Cities/Cities";
import Seats from "./components/Seats/Seats";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Navigate to="/auth" />}></Route>
        <Route path="/auth" element={<Login />}></Route>
        <Route path="/cities" element={<Cities />}></Route>
        <Route path="/seats" element={<Seats />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
