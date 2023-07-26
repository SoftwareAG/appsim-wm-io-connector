const services = require("../../services");

module.exports = {

  name: "get_service_request_by_id",

  title: "getServiceRequestById",

  description: "",
  version: "v1",

  input: {
    title: "getServiceRequestById",
    type: "object",
    properties: {
      serviceRequestId: {
        title: "serviceRequestId",
        type: "string",
        minLength: 1,
        description: "Service Request Id"
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
    serviceRequestId: "PSR-100089"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "servicerequests/" + input.serviceRequestId;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
