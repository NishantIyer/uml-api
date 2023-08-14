# uml-api

api/
|-- src/
|   |-- controllers/
|   |   |-- scanResultsController.js
|   |
|   |-- models/
|   |   |-- ScanResult.js
|   |
|   |-- routes/
|   |   |-- scanResults.js
|   |
|   |-- services/
|   |   |-- scanResultService.js
|   |
|   |-- utils/
|   |   |-- logger.js
|   |
|   |-- app.js
|   |-- config/
|   |   |-- db.js
|   |
|   |-- tests/
|   |   |-- (test files)
|   |
|   |-- .env
|   |-- .gitignore
|   |-- package.json
|   |-- README.md
|
|-- (other files and directories)


Here's the updated file structure for the API to receive data from the ESP32:

1. `src/` (Source directory):
    
    - This directory contains all the source code for the API.
2. `controllers/`:
    
    - `scanResultsController.js`: This file contains the controller functions that handle incoming HTTP requests related to scan results from the ESP32. It interacts with the service layer to process the data and sends the appropriate HTTP responses back to the client.
3. `models/`:
    
    - `ScanResult.js`: This file defines the Mongoose schema for the ScanResult model. It specifies the structure of the data that will be stored in the MongoDB database for each scan result received from the ESP32.
4. `routes/`:
    
    - `scanResults.js`: This file defines the API routes related to scan results from the ESP32. It maps incoming HTTP requests to the corresponding controller functions in `scanResultsController.js`.
5. `middlewares/`:
    
    - `authMiddleware.js`: This file contains the custom middleware function(s) that can be used to check the authentication and authorization of incoming requests before they are processed by the controller functions. You might not need authentication for the ESP32 data, so this is optional.
6. `services/`:
    
    - `scanResultService.js`: This file contains the business logic for handling scan results from the ESP32. It interacts with the database through the model and performs operations like creating and reading scan results.
7. `utils/`:
    
    - `logger.js`: This file contains a utility function to handle logging in the application. It can be used to log important events and errors.
8. `app.js`:
    
    - This file is the entry point of the application. It sets up the Express app, registers middleware functions, and defines the routes. It also connects to the MongoDB database using the configuration from `config/db.js`.
9. `config/`:
    
    - `db.js`: This file contains the configuration for connecting to the MongoDB database using Mongoose. It specifies the connection URI and other database settings.
10. `tests/`:
    
    - This directory contains test files to test the functionality of the application. The tests are organized based on controllers, services, and utils.
11. `.env` (Optional):
    
    - This file is used to store environment variables for the application. For example, you can store the MongoDB connection URI and other sensitive information in this file.
12. `.gitignore`:
    
    - This file specifies which files and directories should be ignored by Git version control.
13. `package.json`:
    
    - This file contains metadata about the project and the list of dependencies needed for the application to run. You can install these dependencies using `npm install` or `yarn install`.
14. `README.md`:
    
    - This is a markdown file that contains documentation for your API. You can describe the API endpoints, how to use them, and any other relevant information.

Now, how these files fit together to handle data from the ESP32:

- When the ESP32 sends scan result data to the API, it will make a POST request to the `/api/scan-results` endpoint defined in `routes/scanResults.js`.
- The `/api/scan-results` route in `routes/scanResults.js` will map the incoming POST request to the `createScanResult` controller function in `controllers/scanResultsController.js`.
- The `createScanResult` controller function will use the `scanResultService.js` in `services/` to handle the received data. It will create a new scan result document in the MongoDB database using the Mongoose model defined in `models/ScanResult.js`.
- The `scanResultService.js` will interact with the database to store the scan result data.
- If you want to provide authentication for this endpoint, you can add the `authMiddleware.js` to the route to check the validity of the request.
