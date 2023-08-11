# webMethods.io Integration Connector for Application Simulator

## Getting Started
This webMethods.io Integration connector is for Application Simulator application and this documentation cover the details to further enhance, test and/ or deploy the connector on a webMethods.io Integration tenant.

### Prerequisites
This connector requires following pre-requisites:
1. [Node.js](https://nodejs.org/dist/) version between 8.14.0 and 10.14.2.
2. [wmiocli](https://www.npmjs.com/package/@webmethodsio/wmiocli) webMethods.io Connector Builder.

### Installation
  1. Clone this repository `https://github.com/SoftwareAG/appsim-wm-io-connector.git`.
  2. Run `npm install -g @webmethodsio/wmiocli`.
  3. Run `wmio login` to login your webMethods.io Integration tenant.
  4. Run `wmio test` to test the connector.
  5. Finally, run `wmio deploy` to deploy this connector to your webMethods.io Integration tenant.

On successful deployment, it will be available under the Connectors list on the workflow canvas with the name **Application Simulator**.

**Note** Run `wmio unpublish` to unpublish the published connector. This will remove the connector from Connectors list on the workflow canvas.

For more details on how to install and deploy the connector, refer to the webMethods.io Integration documentation for [Connector Builder - Node.js CLI](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0)

### Application Simulator Access Credentials
If you don't have credentials to access the Application Simulator, [request access here](https://daehpresal53703.hycloud.softwareag.com/AppSim/#/requestaccess). Fill in the required details and submit your request. Admin team will review your request and will share the access credential by an email.

## Usage
Following actions are supported by this connector:
  1. `getRecords`: To fetch records from objects. Objects supported are Addresses, Customers, Countries, Currencies, Devices, Locations, Products, Purchase Orders, Purchase Order Items, Sales Orders, Sales Order Items and Service Requests.
  2. `getRecordById`: To fetch a record by id from an object. Objects supported are Addresses, Customers, Countries, Currencies, Devices, Locations, Products, Purchase Orders, Purchase Order Items, Sales Orders, Sales Order Items and Service Requests.
  3. `createPurchaseOrder`: To create a new purchase order.
  4. `createSalesOrder`: To create a new sales order.

------------------------------

These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
