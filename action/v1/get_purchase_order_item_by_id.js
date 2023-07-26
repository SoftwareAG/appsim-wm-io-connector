const services = require("../../services");

module.exports = {

  name: "get_purchase_order_item_by_id",

  title: "getPurchaseOrderItemById",

  description: "",
  version: "v1",

  input: {
    title: "getPurchaseOrderItemById",
    type: "object",
    properties: {
      purchaseOrderItemId: {
        title: "purchaseOrderItemId",
        type: "string",
        minLength: 1,
        description: "Purchase Order Item Id"
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
    purchaseOrderItemId: "POI_001"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "purchaseorderitems/" + input.purchaseOrderItemId;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
