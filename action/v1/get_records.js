const services = require("../../services");
const utils = require("../../utils");

module.exports = {

  name: "get_records",

  title: "Get Records",

  description: "",
  version: "v1",

  input: {
    title: "Get Records",
    type: "object",
    properties: {
      object: {
        title: "object",
        type: "string",
        enum: ["Address", "Customer", "Country", "Currency", "Device", "Location", "Product", "Purchase Order", "Purchase Order Item", "Sales Order", "Sales Order Item", "Service Request"], // Define the dropdown options here
        description: "Select the object you want from the dropdown",
        minLength: 1,
      },
      offset: {
        title: "offset",
        type: "integer",
        description: "Starting index of record"
      },
      limit: {
        title: "limit",
        type: "integer",
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
    offset: 1,
    limit: 10,
    object: "Customer"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var objectString = utils.removeSpacesAndLowerCase(input.object); //reusable function in utils.js
    var resource = utils.pluralizeNoun(objectString); //reusable function in utils.js
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(input.auth.tenant, resource, credentials); //reusable function in services.js
    // var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
