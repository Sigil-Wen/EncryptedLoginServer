const mongoose = require('mongoose');
require('mongoose-type-email');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email:{type: mongoose.SchemaTypes.Email, required: true,},
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 2
    },
    passwordHash: { type: String, required: true},
},{
    timestamps: true,
});

const User = mongoose.model('users',userSchema);
module.exports = User;