/*
 * index 
 * Jesús Juan Aguilar 2016
 * 
 * */
var express    = require('express');
var expressCfg = require('./config/config.express.js'); 
var router     = require('./servernode/router'); 
var app        = express();

expressCfg.build(app, express);
router.redirect(app);

app.listen(3000);
console.log('Listening on 3000');
