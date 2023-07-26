const services = require("../../services");

module.exports = {

  name: "get_service_requests",

  title: "getServiceRequests",

  description: "",
  version: "v1",

  input: {
    title: "getServiceRequests",
    type: "object",
    properties: {
      offset: {
        title: "offset",
        type: "string",
        minLength: 1,
        description: "Starting Index of Record"
      },
      limit: {
        title: "limit",
        type: "string",
        minLength: 1,
        description: "Number of Records"
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
    limit: "10"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "servicerequests/";
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
