import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBar, Typography, Button, Grid, Toolbar } from "@mui/material";
import Home from "./components/Home";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography>Test</Typography>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
