const services = require("../../services");
const utils = require("../../utils");

module.exports = {

  name: "get_record_by_id",

  title: "getRecordById",

  description: "",
  version: "v1",

  input: {
    title: "getRecordById",
    type: "object",
    properties: {
      object: {
        title: "object",
        type: "string",
        enum: ["Address", "Customer", "Country", "Currency", "Device", "Location", "Product", "Purchase Order", "Purchase Order Item", "Sales Order", "Sales Order Item", "Service Request"], // Define the dropdown options here
        description: "Select the object you want from the dropdown",
        minLength: 1,
      },
      id: {
        title: "id",
        type: "string",
        minLength: 1,
        description: "A valid id for the selected object. ('customer id' if 'Customer' is selected in dropdown)"
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
    object: "Customer",
    id: "CUST00001"
  },

  execute: function (input, output) {
    var objectString = utils.removeSpacesAndLowerCase(input.object); //reusable function in utils.js
    var resource = utils.pluralizeNoun(objectString); //reusable function in utils.js
    var rootURL = input.auth.tenant + resource + "/" + input.id;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
