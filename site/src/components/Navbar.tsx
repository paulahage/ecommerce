import React from "react";
import { AppBar, Typography, Button, Toolbar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup")
  }




  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>
          <Link to="/">Test</Link>
        </Typography>
        <Button color="inherit" onClick={handleSignup}>Signup</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
