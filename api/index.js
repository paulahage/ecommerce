const express = require("express")
const cors = require("cors")
const webserver = express()
webserver.use(cors())
webserver.use(express.json());

const createSiteState = require("./createSiteState");
const siteState = createSiteState();

const createProductsApi = require("./createProductsApi");
createProductsApi(webserver, siteState);

const createUsersApi = require("./createUsersApi");
createUsersApi(webserver, siteState)

webserver.listen(3001, () => {
  console.log("ecommerce project is listening on port 3001");
});
