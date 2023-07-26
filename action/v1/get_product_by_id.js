const services = require("../../services");

module.exports = {

  name: "get_product_by_id",

  title: "getProductById",

  description: "",
  version: "v1",

  input: {
    title: "getProductById",
    type: "object",
    properties: {
      productId: {
        title: "productId",
        type: "string",
        minLength: 1,
        description: "Product Id"
      }
    }
  },

  output: {
    title: "output",
    type: "object",
    properties: {

    }
  },

  mock_input: {
    productId: "PROD00001"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "products/" + input.productId;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
