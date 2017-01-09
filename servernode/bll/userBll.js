/**
*   Jesús Juan Aguilar - LoginBll 
*	12/2016
*/

var datapool = require('./../datapool');
var userModel = datapool.getRepository('User');
var crypt = require('../helpers/crypto');

exports.findOne = findOne;
exports.save = save;
exports.findOneByPass = findOneByPass;

function findOne(user) {
	  return userModel.findOne({'user': user})
	  				  .lean().exec();
}

function findOneByPass(user, pass) {
	  return userModel.findOne({'user': user, 'pasword': pass})
	  				  .lean().exec();
}

function save(dto) {
	var sv = new userModel({
		user: dto.user,
	    pasword: crypt.encrypt(dto.password),
	    email: dto.email,
	});

	return sv.save();
}