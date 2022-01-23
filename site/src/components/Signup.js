import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <label htmlFor="">Name: </label>
      <input className="valid-input"></input>
    </div>
  );
};

export default Signup;
