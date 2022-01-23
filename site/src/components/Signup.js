import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as yup from "yup"


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setErrorName] = useState("")
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const nameValidation = yup
      .string()
      .required("Name is required")
      .min(2, "Name has to at least 2 characters")

  const emailValidation = yup
      .string()
      .required("Email is required")
      .email("Invalid email address")

  const passwordValidation = yup
      .string()
      .min(6, "Minimum of 6 characters")



  const handleSubmit = async () => {
    try {
      await nameValidation.validate(name)
      setErrorName("")
    } catch (error) {
      setErrorName(error.errors[0]);

      console.log(JSON.stringify(error, undefined, 2));

    }

    try {
      await emailValidation.validate(email)
      setErrorEmail("")
    } catch (error) {
      setErrorEmail(error.errors[0]);
    }

    try {
      await passwordValidation.validate(password);
      setErrorPassword("");
    } catch (error) {
      setErrorPassword(error.errors[0])
    }


    // const response = await fetch("http://localhost:3001/users", {
    //   method: "POST",
    //   headers: {
    //     body: { name, email, password }
    //   },
    // });
    // const responseCode = response.status;
    // console.log(responseCode);



  };



  return (
    <Box>
      <div>
        <TextField
          label="Name"
          onChange={(e) => setName(e.target.value)}
          error={errorName !== ""}
          helperText={errorName}
        />
      </div>
      <div>
        <TextField
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          error={errorEmail !== ""}
          helperText={errorEmail}
        />
      </div>
      <div>
        <TextField
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
          error={errorPassword !== ""}
          helperText={errorPassword}
        />
      </div>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default Signup;
