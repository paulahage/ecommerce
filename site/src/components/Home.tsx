import React, {useEffect, useState} from "react";

const Home = () => {
  const [departments, setDepartments] = useState([]);

  const getDepartments = async () => {
    const response = await fetch("http://localhost:3001/departments")
    const data = await response.json();
    //console.log(data);
    setDepartments(data);
  }

  useEffect(() => {
    getDepartments();
  },[])

  return <div>
    {departments.map((department) => {
      const { name, image } = department;
      return <div>
        <img src={image} alt="" />
        <h2>{name}</h2>
      </div>
    })}
  </div>
}

export default Home;