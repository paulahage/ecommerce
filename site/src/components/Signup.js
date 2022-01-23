import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        body: { name, email, password }
      },
    });
    const responseCode = response.status;
    console.log(responseCode);
  };

  return (
    <Box>
      <div>
        <TextField
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Signup;
