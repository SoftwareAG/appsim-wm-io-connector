const services = require("../../services");

module.exports = {

  name: "create_sales_order",

  title: "Create Sales Order",

  description: "",
  version: "v1",

  input: {
    title: "createSalesOrder",
    type: "object",
    properties: {
      customerId: {
        title: "customerId",
        type: "string",
        minLength: 1
      },
      statusId: {
        title: "statusId",
        type: "string",
        minLength: 1
      },
      isUrgent: {
        title: "isUrgent",
        type: "boolean"
      },
      currencyId: {
        title: "currencyId",
        type: "string",
        minLength: 1
      },
      processTypeId: {
        title: "processTypeId",
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
              type: "integer",
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
    "statusId": "ORD-STA-02",
    "isUrgent": false,
    "currencyId": "CUR-001",
    "processTypeId": "PRO-TYP-03",
    "products": [
      {
        "id": "PROD00001",
        "quantity": 2
      }
    ]
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    // var rootURL = input.auth.tenant + "salesorders";
    var rootURL = input.auth.tenant;
    var credentials = input.auth.username + ":" + input.auth.password;
    var requestBody =
    {
      "input": {
        "customerId": input.customerId,
        "statusId": input.statusId,
        "isUrgent": input.isUrgent,
        "currencyId": input.currencyId,
        "processTypeId": input.processTypeId,
        "products": input.products
      }
    };
    var option = services.getOptionsForCreateRequest(rootURL, 'salesorders', credentials, requestBody); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
