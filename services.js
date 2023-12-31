function getOptionsForGetRequest(rootURL, credentials) {
    // reusable function to return values required for making an HTTP GET request to Application Simulator
    return {
        method: "GET",
        headers: {
            "Accept": "application/json",
            Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
        },
        url: rootURL,
        qs: {},
    };
}

function getOptionsForCreateRequest(rootURL, credentials, requestBody) {
    // reusable function to return values required for making an HTTP GET request to Application Simulator
    return {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
        },

        url: rootURL,
        body: requestBody,
        json: true,
        qs: {},
    };
}

function makeHttpRequest(option, output) {
    // reusable function to make an HTTP Request
    var request = require("request");
    request(option, function (error, response, body) {
        if (error) {
            output(error);
        }
        else if (response.statusCode == 401) {
            output("Invalid credentials");
        }
        else if (response.statusCode >= 200 || response.statusCode == 201) {
            output(null, body);
        }
        else {
            output("Something went wrong. Please check the input parameters or contact global presales team if the issue persists.");
        }
    });
}


module.exports = {
    getOptionsForGetRequest: getOptionsForGetRequest,
    getOptionsForCreateRequest: getOptionsForCreateRequest,
    makeHttpRequest: makeHttpRequest,
};