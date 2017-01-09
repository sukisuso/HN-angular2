
var mongoose = require('mongoose');    

var User = new mongoose.Schema({
    user: { type: String, required: true, index: { unique: true } },
    pasword: { type: String, required: true },
    email: { type: String, required: true },
});

mongoose.model('User', User);
