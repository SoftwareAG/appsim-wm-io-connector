const services = require("../../services");

module.exports = {

  name: "get_sales_order_item_by_id",

  title: "getSalesOrderItemById",

  description: "",
  version: "v1",

  input: {
    title: "getSalesOrderItemById",
    type: "object",
    properties: {
      salesOrderItemId: {
        title: "salesOrderItemId",
        type: "string",
        minLength: 1,
        description: "Sales Order Item Id"
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
    salesOrderItemId: "ORDL-98793"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "salesorderitems/" + input.salesOrderItemId;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
