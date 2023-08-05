const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    email:{
        type: String
    },
    sendBy: {
        type: String
    },
    sendTo: {
        type: String
    },
    sendDate: {
        type: Date
    },
    message: {
        type: String
    }
})