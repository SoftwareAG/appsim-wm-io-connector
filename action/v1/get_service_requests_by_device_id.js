const services = require("../../services");

module.exports = {

  name: "get_service_request_by_device_id",

  title: "getServiceRequestByDeviceId",

  description: "",
  version: "v1",

  input: {
    title: "getServiceRequestByDeviceId",
    type: "object",
    properties: {
      deviceId: {
        title: "deviceId",
        type: "string",
        minLength: 1,
        description: "Device Id"
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
    deviceId: "00001240"
  },

  execute: function (input, output) {
    // to access auth info use input.auth , eg: input.auth.username
    // and to return output use output callback like this output(null, { 'notice' : 'successful'})
    var rootURL = input.auth.tenant + "servicerequests/devices/" + input.deviceId;
    var credentials = input.auth.username + ":" + input.auth.password;
    var option = services.getOptionsForGetRequest(rootURL, credentials); //reusable function in services.js
    services.makeHttpRequest(option, output); //reusable function in services.js
  }

}
