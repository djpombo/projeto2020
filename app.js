const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
const app = express();
const admin = require('./routes/admin');

/**
 * CONFIGS
 */

 //body-parser config
    app.use(bodyParser.urlencoded({extented:true}));
    app.use(bodyParser.json());

//handlebars config
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

//Mongoose config
    //breve

//



 /**
  * ROUTES
  */

  app.use('/admin', admin);


  /**
   * OUTHERS
   */
  const PORT = 8081;
  app.listen(PORT, ()=>{

    console.log("Server Running");

  });
