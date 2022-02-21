import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, Typography, Grid } from "@mui/material";

const URLDept = "http://localhost:3001/departments";

const Home = () => {
  const [departments, setDepartments] = useState([]);

  const getDepartments = async () => {
    const response = await fetch(URLDept);
    const data = await response.json();
    //console.log(data);
    setDepartments(data);
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <Grid container spacing={2}>
      {departments.map((department) => {
        const { name, image } = department;
        return (
          <Grid item key={name} xs={6} md={4} lg={3}>
            <Link to={`/departments/${name}/products`}>
              <Card variant="elevation">
                <CardMedia image={image} component="img" />
                <Typography>{name}</Typography>
              </Card>
            </Link>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Home;
