const mongoose =  require("mongoose");

const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    contact: {
        type: Number,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isGroup: {
        type: Boolean,
        default: false
    },
    userOnline: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
    },
    message: {
        type: Array,
    },
   
})

const User = mongoose.model("User", UserSchema);

module.exports = User;