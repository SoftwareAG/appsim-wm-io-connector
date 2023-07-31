const services = require("../../services");

module.exports = {

  name: "create_purchase_order",

  title: "createPurchaseOrder",

  description: "",
  version: "v1",

  input: {
    title: "createPurchaseOrder",
    type: "object",
    properties: {
      customerId: {
        title: "customerId",
        type: "string",
        minLength: 1
      },
      shippingAddressId: {
        title: "shippingAddressId",
        type: "string",
        minLength: 1
      },
      products: {
        title: "products",
        type: "array",
        minLength: 1,
        description: "Click on + icon below to add product details",
        items: {
          title: "item",
          type: "object",
          minLength: 1,
          properties: {
            id: {
              title: "id",
              type: "string",
              minLength: 1,
              description: "A valid product id"
            },
            quantity: {
              title: "quantity",
              type: "string",
              minLength: 1,
              description: "Quantity of the product"
            }
          }
        }
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
    "customerId": "CUST00001",
    "shippingAddressId": "ADDR00003",
    "products": [
      {
        "id": "PROD00003",
        "quantity": "2"
      },
      {
        "id": "PROD00002",
        "quantity": "4"
      }
    ]
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "purchaseorders";
    var credentials = input.auth.username + ":" + input.auth.password;
    var requestBody =
    {
      "input": {
        "customerId": input.customerId,
        "shippingAddressId": input.shippingAddressId,
        "products": input.products
      }
    };
    var option = services.getOptionsForCreateRequest(rootURL, credentials, requestBody); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
