const services = require("../../services");

module.exports = {

  name: "get_purchase_order_by_id",

  title: "getPurchaseOrderById",

  description: "",
  version: "v1",

  input: {
    title: "getPurchaseOrderById",
    type: "object",
    properties: {
      purchaseOrderId: {
        title: "purchaseOrderId",
        type: "string",
        minLength: 1,
        description: "Purchase Order Id"
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
    purchaseOrderId: "PO_001"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "purchaseorders/" + input.purchaseOrderId;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
