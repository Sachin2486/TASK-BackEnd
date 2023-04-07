const express = require("express");
const upload = require("../config/multer");
const FileHistory = require("../model/sasfiles");
const SasAudio = require("../modal/Audio");
const sasApiClient = require("../ApiH/SASapi");
const { generateFilter, jsonFilter } = require("../ApiH/FData");
const router = express.Router();

router.post(
    async (req, res, next) => {
        try {
            const { data } = JSON.parse(req.file.buffer);

            const fileHistory = new FileHistory({

                Id: req.body.Id,
                audios: await SasAudio.create(data),
                cnt: data.length,
                pending: data.length,
            });

            await fileHistory.save();
            res.status(200).json({
                status: 1,
                data: fileHistory,
                message: "Uploaded File Data",
                error: null,
            });
            sasApiClient(fileHistory);

        } catch (error) {
            res.status(500).json({
                status: 0,
                requestId: null,
                message: "File was not added",
                error: null,
            });
            console.log(error);
        }
    }
);


module.exports = router;
