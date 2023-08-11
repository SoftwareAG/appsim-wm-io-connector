# webMethods.io Integration Connector for Application Simulator
## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
### Prerequisites
This connector requires any [Node](https://nodejs.org/dist/) version between 8.14.0 and 10.14.2.

Note: If you have installed any other Node version on your system, you can:
  1. Use tools to switch between different versions of Node.
     - For Windows, use [nvm-windows](https://github.com/coreybutler/nvm-windows#installation--upgrades).
     - For Mac, use [homebrew](https://brew.sh/).
  2. Build your app using your existing Node version and then transpile your code using a transpiler like [Babel](https://babeljs.io/).<br>

The connector has been built with [wmiocli](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0), webmethod.io's iPaaS Connector Builder CLI tool, which must be installed.
### Installation
  1. Clone the repo `https://github.com/SoftwareAG/appsim-wm-io-connector.git`.
  2. Run `npm install -g @webmethodsio/wmiocli`.
  3. Login to your webmethods.io tenant using `wmio login`.
  4. Execute `wmio test` to test the connector.
  5. Finally, execute `wmio deploy` to deploy this connector to your tenant.

Once deployed, it’ll be automatically registered with webMethods.io Integration and will be available to you locally in the Connectors panel under the Services tab.

NOTE- Use `wmio unpublish` to unpublish the published connector app along with triggers and actions associated with the app.
### AppSim Access Credentials
If you don't have credentials to access the Application Simulator, [request here](https://daehpresal53703.hycloud.softwareag.com/AppSim/#/requestaccess). Fill in the required details and submit. You'll receive the credentials via provided email address.
## Usage
The actions supported by Application Simulator are:
  1. `getRecords`: To fetch records from objects. It supports Adresses, Customers, Countries, Currencies, Devices, Locations, Products, Purchase Orders, Purchase Order Items, Sales Orders, Sales Order Items, Service Requests.
  2. `getRecordById`: To fetch record from objects using the specific id. It supports Adresses, Customers, Countries, Currencies, Devices, Locations, Products, Purchase Orders, Purchase Order Items, Sales Orders, Sales Order Items, Service Requests.
  3. `createPurchaseOrder`: To create a new purchase order.
  4. `createSalesOrder`: To create a new sales order.
