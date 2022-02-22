const faker = require("@faker-js/faker");

module.exports = (webserver, siteState) => {
  // list users
  webserver.get("/users", (request, response) => {
    response.send(siteState.users);
  });

  // create new user
  webserver.post("/user/create", (request, response) => {
    const user = request.body;

    if (!user.name) {
      response.status(401);
      return response.send(`invalid name`);
    }

    if (!user.email) {
      response.status(401);
      return response.send(`invalid email`);
    }

    if (!user.email) {
      response.status(401);
      return response.send(`invalid password`);
    }

    user.id = faker.datatype.uuid();
    user.image = faker.image.avatar();
    siteState.users.push(user);

    response.send(user);
  });

  // login user
  webserver.post("/users/login", (request, response) => {
    const { email, password } = request.body;

    const userByEmail = siteState.users.find((user) => user.email === email);
    if (!userByEmail) {
      response.status(404);
      response.send(`user ${email} does not exist`);
      return;
    }

    if (password !== userByEmail.password) {
      response.status(401);
      response.send(`password invalid for user ${email}`);
    }

    response.status(200);
    response.send(userByEmail);
  });
};
