const services = require("../../services");
const utils = require("../../utils");

module.exports = {

  name: "get_records",

  title: "getRecords",

  description: "",
  version: "v1",

  input: {
    title: "getRecords",
    type: "object",
    properties: {
      object: {
        title: "object",
        type: "string",
        enum: ["Address", "Country", "Currency", "Customer", "Device", "Inventory", "KPIMetric", "Location", "Personnel", "Product", "Purchase Order", "Purchase Order Item", "Sales Order", "Sales Order Item", "Service Request"], // Define the dropdown options here
        description: "Select the object you want from the dropdown",
        minLength: 1,
      },
      queryParams: {
        title: "queryParams",
        type: "string",
        description: "Provide query parameters (if any)"
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
    queryParams : "offset=1&limit=10",
    object: "Customer"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var objectString = utils.removeSpacesAndLowerCase(input.object); //reusable function in utils.js
    var resource = utils.pluralizeNoun(objectString); //reusable function in utils.js
    var rootURL = input.auth.tenant + resource; 
    // changing URL based on the query parameters
    if(input.queryParams != ""){
      rootURL = rootURL + "?" + input.queryParams;
    }
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
