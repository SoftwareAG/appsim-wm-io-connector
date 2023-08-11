# webMethods.io Integration Connector for Application Simulator
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.
### Prerequisites
This connector requires any Node version between 8.14.0 and 10.14.2.

Note: If you have installed any other [Node](https://nodejs.org/dist/) version on your system, you can:
  1. Use tools to switch between different versions of Node.
     - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
     - For Mac, use [homebrew](https://brew.sh/).
  2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).<br>

The connector has been built with [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI tool, which must be installed.
### Installing
  1. Clone the repo `https://github.com/SoftwareAG/appsim-wm-io-connector.git`.
  2. Run `npm install -g @webmethodsio/wmiocli`.
  3. Login to your webmethods.io tenant using `wmio login`.
  4. Execute `wmio init` to get started.
  5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.
