const services = require("../../services");

module.exports = {

  name: "create_address",

  title: "Create Address",

  description: "",
  version: "v1",

  input: {
    title: "createSalesOrder",
    type: "object",
    properties: {
      "addressLine1": {
        "title": "addressLine1",
        "displayTitle": "Address Line 1",
        "type": "string",
        "description": "",
        "required": true,
        "minLength": 1
      },
      "addressLine2": {
        "title": "addressLine2",
        "displayTitle": "Address Line 2",
        "type": "string",
        "description": "",
        "required": true,
        "minLength": 1
      },
      "cityTown": {
        "title": "cityTown",
        "displayTitle": "City Town",
        "type": "string",
        "description": "",
        "required": true,
        "minLength": 1
      },
      "postcodeZip": {
        "title": "postcodeZip",
        "displayTitle": "Postcode Zip",
        "type": "string",
        "description": "",
        "required": true,
        "minLength": 1
      },
      "countyStateProvince": {
        "title": "countyStateProvince",
        "displayTitle": "County/State/Province",
        "type": "string",
        "description": "",
        "required": true,
        "minLength": 1
      },
      "countryId": {
        "title": "countryId",
        "displayTitle": "Country Id",
        "type": "string",
        "description": "",
        "required": true,
        "minLength": 1
      }
    }
  },

  output: {
    title: "output",
    type: "object",
    properties: {
      "output": {
        "title": "Output",
        "type": "object",
        "properties": {
          "id": {
            "title": "id",
            "displayTitle": "Id",
            "type": "string",
            "description": ""
          }
        }
      }
    }
  },

  mock_input: {
    "addressLine1": "Software AG",
    "addressLine2": "Darmstadt",
    "cityTown": "Darmstadt",
    "postcodeZip": "64297",
    "countyStateProvince": "Germany",
    "countryId": "REFCOUN-003"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    // var rootURL = input.auth.tenant + "addresses";
    var rootURL = input.auth.tenant;
    var credentials = input.auth.username + ":" + input.auth.password;
    var requestBody =
    {
      "input": {
        "addressLine1": input.addressLine1,
        "addressLine2": input.addressLine2,
        "cityTown": input.cityTown,
        "postcodeZip": input.postcodeZip,
        "countyStateProvince": input.countyStateProvince,
        "countryId": input.countryId
      }
    };
    var option = services.getOptionsForCreateRequest(rootURL, 'addresses', credentials, requestBody); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
