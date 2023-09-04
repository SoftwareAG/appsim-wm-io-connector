module.exports = {
  label: 'Connect to Basic',
  mock_input: {
    "tenant": "",
    "username": "",
    "password": ""
  },
  input: {
    type: "object",
    properties: {
      tenant: {
        type: "string",
        minLength: 1,
        title: "Server URL",
      },
      username: {
        type: "string",
        minLength: 1,
        title: "Username"
      },
      password: {
        type: "string",
        minLength: 1,
        title: "Password",
        format: "password"
      },
    }
  },

  validate: function (input, output) {
    output(null, true);
  }
}