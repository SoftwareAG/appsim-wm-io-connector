const services = require("../../services");

module.exports = {

  name: "get_customer_by_id",

  title: "getCustomerById",

  description: "",
  version: "v1",

  input: {
    title: "getCustomerById",
    type: "object",
    properties: {
      customerId: {
        title: "customerId",
        type: "string",
        minLength: 1,
        description: "Customer Id"
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
    customerId: "CUST00001"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "customers/" + input.customerId;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
