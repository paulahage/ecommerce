import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBar, Typography, Button, Grid, Toolbar } from "@mui/material";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/departments/:department/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
