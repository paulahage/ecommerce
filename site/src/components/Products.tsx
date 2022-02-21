import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardMedia, Typography, Grid } from "@mui/material";


const URLProducts = "http://localhost:3001/products";

const Products = () => {
  const [products, setProducts] = useState([]);

  const departments = useParams();
  //console.log(departments);
  const { department } = departments;




  const getProducts = async () => {
    const response = await fetch(URLProducts);
    const data = await response.json();
    //console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <>
      <Typography>{department}</Typography>
      <Grid container spacing={2}>
        {products.map((product) => {
          const { image, id, name } = product;
          return (
            <Grid item key={id} xs={6} md={6} lg={4}>
              <Card variant="elevation">
                <CardMedia component="img" image={image} />
                <Typography>{name}</Typography>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );

}

export default Products;