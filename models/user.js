const Joi = require('joi');
const mongoose = require('mongoose');

const userschema = mongoose.Schema({
    username: { type: String, unique: true },
    firstName: String,
    lastName:  String,
    password:  String,
});

const User = mongoose.model('User', userschema);

function validateUser(user) {
    const schema = Joi.object({
        username: Joi.string().min(3).max(50).required(),
        firstName: Joi.string().max(50).required(),
        lastName: Joi.string().max(50).required(),
        password: Joi.string().min(3).max(50).required()
    });
    
    return schema.validate(user);
}

module.exports = { User, validateUser };
