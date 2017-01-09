var mongoose = require('mongoose');
var config = require('../config/config');
mongoose.connect(config.database);
var ObjectId = mongoose.Types.ObjectId;
var URL = '/models';
var URL_REQ = './models/';
var URL_BO = '/bo';
var URL_BO_REQ = './bo/';
var fs = require('fs');
exports.getRepository = function (model) {
    return mongoose.model(model);
};
exports.loadRepositories = function () {
    var files = fs.readdirSync(__dirname + URL);
    files.forEach(function (file) {
        console.log('## DTO -- ' + URL_REQ + file.split('.')[0]);
        require(URL_REQ + file.split('.')[0]);
    });
};
exports.id = function (id) {
    return ObjectId(id);
};
exports.loadBussinesOperations = function (app) {
    var files = fs.readdirSync(__dirname + URL_BO);
    files.forEach(function (file) {
        console.log('## BO -- ' + URL_BO_REQ + file.split('.')[0]);
        var bo = require(URL_BO_REQ + file.split('.')[0]);
        bo.startPaths(app);
    });
};
