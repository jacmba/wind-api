/**
 * @author Jacinto Mba
 * @since 2017 05 23
 */

'use strict';

// Declare dependencies
let Express = require('express');
let XwindCtrl = require('./xwind/routes');

// Instantiate objects
let app = Express();
let xCrtl = new XwindCtrl();

// Setup routes
app.get('/xwind', (req, res) => {
  xCrtl.getXwind(req, res);
});

// Setup server port
const PORT = process.env.PORT || 3000;

// Startup server
app.listen(PORT, (err) => {
  if(err) {
    console.error(`Error starting server: ${err}`);
    process.exit(1);
  }

  console.log(`Server listening on port ${PORT}`);
});