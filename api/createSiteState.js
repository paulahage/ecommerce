const faker = require("@faker-js/faker");

module.exports = () => {
  const siteState = {
    products: [],
    users: [],
  };

  const generateProduct = () => {
    return {
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      departmentId: faker.commerce.department().toLowerCase(),
      image: `${faker.image.nature()}?random=${Math.round(Math.random() * 1000)}`,
    };
  };

  for (let i = 0; i < 1000; i++) {
    const product = generateProduct();
    siteState.products.push(product);
  }

  return siteState;
};
