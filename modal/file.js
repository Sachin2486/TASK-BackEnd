const mongoose = require("mongoose");
const sasAudio = require("./sasAudio");

const filesSchema = new mongoose.Schema({
    fileId: { type: String, required: true, unique: true },
    userId: { type: String, required: true, default: uuid() },
    time: { type: String, default: Date.now() },
    responseTime: { type: String },
    count: { type: Number },

    audios: [sasAudio.schema],
    status: {
        type: String,
        enum: ["Processing", "Done"],
        default: "Processing",
    },
    failed: { type: Number, default: 0 },
    success: { type: Number, default: 0 },
});

const FileHistory = mongoose.model("FileHistory", filesSchema);
module.exports = FileHistory;

