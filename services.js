function getOptionsForGetRequest(rootURL, resource, credentials) {
    // reusable function to return values required for making an HTTP GET request to Application Simulator
    return {
        method: 'GET',
        baseURL: rootURL,
        url: resource,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
        }
    }
}

function getOptionsForCreateRequest(rootURL, resource, credentials, requestBody) {
    // reusable function to return values required for making an HTTP GET request to Application Simulator
    return {
        method: 'POST',
        baseURL: rootURL,
        url: resource,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + Buffer.from(credentials).toString("base64"),
        },
        data: requestBody
    }
}

function makeHttpRequest(option, output) {
    // reusable function to make an HTTP Request
    const axios = require('axios');
    try {
        axios.request(option)
            .then(function (response) {
                if (response.status == 401) {
                    return output("Invalid credentials");
                } else if (response.status >= 200 || response.status == 201) {
                    return output(null, response.data);
                } else {
                    return output({
                        "message": "Something went wrong. Please check the input parameters or contact global presales team if the issue persists.",
                        'text': response.text
                    });
                }
            })
            .catch(function (error) {
                return output({ "error": error });
            });
    } catch (error) {
        return output({ "error": error });
    }
}


module.exports = {
    getOptionsForGetRequest: getOptionsForGetRequest,
    getOptionsForCreateRequest: getOptionsForCreateRequest,
    makeHttpRequest: makeHttpRequest,
};