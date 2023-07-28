const services = require("../../services");

module.exports = {

  name: "get_records",

  title: "getRecords",

  description: "",
  version: "v1",

  input: {
    title: "getRecords",
    type: "object",
    properties: {
      record: {
        title: "record",
        type: "string",
        enum: ["Customers", "Products", "Purchase Orders", "Purchase Order Items", "Sales Orders", "Sales Order Items", "Service Requests"], // Define the dropdown options here
        description: "Select the record you want from the dropdown",
        minLength: 1,
      },
      offset: {
        title: "offset",
        type: "string",
        minLength: 1,
        description: "Starting index of record"
      },
      limit: {
        title: "limit",
        type: "string",
        minLength: 1,
        description: "Number of records"
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
    offset: "1",
    limit: "10",
    record: "Customers"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var resource = services.removeSpacesAndLowerCase(input.record); //reusable function in services.js
    var rootURL = input.auth.tenant + resource;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
