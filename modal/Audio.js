const mongoose = require("mongoose");


const sasAudio = new mongoose.Schema({
    apiCallId: { type: String },
    // fileId: { type: String, required: true },
    time: { type: String },
    responseTime: { type: String },
    audio_id: { type: String, required: true },
    reference_text_id: { type: String, required: true },
    apiResponse: { type: String },
    status: {
        type: String,
        enum: ["Processing", "Done"],
        default: "Uploading",
    },
});

const data = mongoose.model("audio", sasAudio);
module.exports = data;

