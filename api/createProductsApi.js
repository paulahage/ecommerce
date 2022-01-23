const faker = require("@faker-js/faker");

module.exports = (webserver, siteState) => {
  // list all products from the site state
  webserver.get("/products", (request, response) => {
    response.send(siteState.products);
  });

  // list all products from the site state
  webserver.get("/departments", (request, response) => {
    const departments = siteState.products.map((product) => product.department);
    const uniqueDepartments = [...new Set(departments)];

    const departmentList = uniqueDepartments.map((department) => ({
        name: department,
        image: faker.image.fashion(),
    }));

    response.send(departmentList);
  });
};
