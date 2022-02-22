const faker = require("@faker-js/faker");

const PAGE_SIZE = 12;

module.exports = (webserver, siteState) => {
  // list all products from the site state
  webserver.get("/department/:id/page/:page", (request, response) => {
    const { id, page } = request.params

    const products = siteState.products.filter((p) => p.departmentId === id)  
    const pages = products.length / PAGE_SIZE;
  
    response.send({
      productCount: products.length,
      pageSize: PAGE_SIZE,
      page,
      pages: Math.ceil(pages),
      products: products.slice((PAGE_SIZE * (page - 1)), PAGE_SIZE * page)
    });
  });

  // list all products from the site state
  webserver.get("/departments/page/:page", (request, response) => {
    const { page } = request.params

    const departments = siteState.products.reduce((acc, product) => {
      const id = product.departmentId.toLowerCase();
      const department = acc.find((d) => d.id === id)

      if(!department) {
        acc.push({
          id,
          name: product.departmentId.substr(0, 1).toUpperCase() + product.departmentId.substr(1),
          image: product.image,
          productCount: 1
        });
      } else {
        department.productCount++
      }

      return acc
    }, []);

    const pages = departments.length / PAGE_SIZE;

    response.send({
      departmentCount: departments.length,
      pageSize: PAGE_SIZE,
      page,
      pages: Math.ceil(pages),
      departments: departments.slice((PAGE_SIZE * (page - 1)), PAGE_SIZE * page)
    });
  });
};
