const services = require("../../services");

module.exports = {

  name: "get_sales_order_by_id",

  title: "getSalesOrderById",

  description: "",
  version: "v1",

  input: {
    title: "getSalesOrderById",
    type: "object",
    properties: {
      salesOrderId: {
        title: "salesOrderId",
        type: "string",
        minLength: 1,
        description: "Sales Order Id"
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
    salesOrderId: "ORD-100001"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "salesorders/" + input.salesOrderId;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
