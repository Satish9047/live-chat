const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    sendBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    content: {
        type: String,
        trim: true
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    },
}, {
    timestamps: true
})

const Message = mongoose.Model("message", messageSchema);

module.exports = Message;