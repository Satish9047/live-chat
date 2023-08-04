const mongoose =  require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
    },
    contact: {
        type: Number,
        unique: true,
    },
    password: {
        type: String,
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;