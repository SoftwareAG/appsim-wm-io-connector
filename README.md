# webMethods.io Integration Connector for Application Simulator

## Getting Started
This webMethods.io Integration connector is for Application Simulator application and this documentation cover the details to further enhance, test and/ or install the connector on a webMethods.io Integration tenant.

### Prerequisites
This connector requires following pre-requisites:
1. [Node.js](https://nodejs.org/dist/) version between 10.0.0 and 14.19.2.
2. [wmiocli](https://www.npmjs.com/package/@webmethodsio/wmiocli) webMethods.io Connector Builder.

### Installation
  1. Clone this repository using `git clone https://github.com/SoftwareAG/appsim-wm-io-connector.git`.
  2. Navigate to the directory `cd appsim-wm-io-connector`.
  3. Run `npm install -g @webmethodsio/wmiocli` to install connector builder.
  4. Run `npm install` to install required libraries.
  5. Run `wmio login` to login your webMethods.io Integration tenant.
  6. Run `wmio test` to test the connector.
  7. Finally, run `wmio deploy` to deploy this connector to your webMethods.io Integration tenant.

On successful deployment, it will be available under the Connectors list on the workflow canvas with the name **Application Simulator**.

**Note** Run `wmio unpublish` to unpublish the published connector. This will remove the connector from Connectors list on the workflow canvas.

For more details on how to install and deploy the connector, refer to the webMethods.io Integration documentation for [Connector Builder - Node.js CLI](https://docs.webmethods.io/integration/developer_guide/connector_builder/#gsc.tab=0)

### Enhancements
Before committing the code with fixes or enhancements, ensure the following:
1. **App ID**, **GUID** and **Connector Connection ID** are removed from the **index.json** file.
2. **.flowapprc** file is emptied.

## Usage
Following actions are supported by this connector:
  1. `getRecords`: To fetch records from objects. Objects supported are Addresses, Charts, Customers, Countries, Currencies, Devices, Inventories, KPI Metrics, Locations, Products, Purchase Orders, Purchase Order Items, Sales Orders, Sales Order Items and Service Requests.
  2. `getRecordById`: To fetch a record by id from an object. Objects supported are Addresses, Customers, Countries, Currencies, Devices, Inventories, KPI Metrics, Locations, Products, Purchase Orders, Purchase Order Items, Sales Orders, Sales Order Items and Service Requests.
  3. `createPurchaseOrder`: To create a new purchase order.
  4. `createSalesOrder`: To create a new sales order.

------------------------------

These tools are provided as-is and without warranty or support. They do not constitute part of the Software AG product suite. Users are free to use, fork and modify them, subject to the license agreement. While Software AG welcomes contributions, we cannot guarantee to include every contribution in the master project.
