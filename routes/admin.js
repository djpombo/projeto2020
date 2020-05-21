const express = require('express');
const router = express.Router();

/**
 * Routes
 */

 router.get('/', (req, res)=>{

    res.send("Pagina principal do painel adm");

 });

 router.get('/posts', (req, res)=>{

   res.send("Pagina de posts");

});



module.exports = router;