import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as yup from "yup";

const Signup = () => {
  // States for the form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for validation error messages
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  // State to watch the first render
  const [firstRender, setFirstRender] = useState(true);

  // Effects to watch each typing in the inputs fields to fire error messages
  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }

    nameValidate();
  }, [name]);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      emailValidate();
    }
  }, [email]);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
    } else {
      passwordValidate();
    }
  }, [password]);

  // Setting the validation inputs with Yup
  const nameValidation = yup
    .string()
    .required("Name is required")
    .min(2, "Name has to at least 2 characters");

  const emailValidation = yup
    .string()
    .required("Email is required")
    .email("Invalid email address");

  const passwordValidation = yup
    .string()
    .required("Password is required")
    .min(6, "Minimum of 6 characters");

  // Validating the inputs
  const nameValidate = async () => {
    try {
      await nameValidation.validate(name);
      setErrorName("");
    } catch (error) {
      setErrorName(error.errors[0]);
    }
  };

  const emailValidate = async () => {
    try {
      await emailValidation.validate(email);
      setErrorEmail("");
    } catch (error) {
      setErrorEmail(error.errors[0]);
    }
  };

  const passwordValidate = async () => {
    try {
      await passwordValidation.validate(password);
      setErrorPassword("");
    } catch (error) {
      setErrorPassword(error.errors[0]);
    }
  };

  //Send to API the data of the user after sign up
  const handleSubmit = async () => {
    nameValidate();
    emailValidate();
    passwordValidate();

    const response = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        body: { name, email, password },
      },
    });
    //const responseCode = response.status;
    setFirstRender(true);
    setName("");
    setFirstRender(true);
    setEmail("");
    setFirstRender(true);
    setPassword("");

  };

  return (
    <Box>
      <div>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errorName !== ""}
          helperText={errorName}
        />
      </div>
      <div>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errorEmail !== ""}
          helperText={errorEmail}
        />
      </div>
      <div>
        <TextField
          label="Password"
          value={password}
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
