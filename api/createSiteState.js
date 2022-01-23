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
      department: faker.commerce.department(),
      image: faker.image.fashion(),
    };
  };

  for (let i = 0; i < 1000; i++) {
    const product = generateProduct();
    siteState.products.push(product);
  }

  return siteState;
};
