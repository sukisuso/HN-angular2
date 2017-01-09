/*
 * Router
 * Jesús Juan Aguilar 12/2016
 * */
var datapool = require('./datapool');
var URL = '/bo';
var URL_REQ = './bo/';
function route(app) {
    datapool.loadRepositories();
    datapool.loadBussinesOperations(app);
    /*app.get('*', function(req, res){
        res.redirect('/');
    });*/
}
exports.redirect = route;
