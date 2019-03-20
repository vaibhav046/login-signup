const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
});


userSchema.pre('save', function (next) {
    // eslint-disable-next-line no-invalid-this
    const user = this;
    console.log('here');
    if (!user.isModified('password')) {
        return next();
    }
    bcrypt.hash(user.password, null, null, (err, hash) => {
        console.log(hash);
        if (err) return next(err);
        user.password = hash;
        console.log(user.password);
        next();
    });
});


module.exports = mongoose.model('User', userSchema);
