const multer = require("multer");
const path = require("path");

const storedata = multer.memoryStorage();

const uploaddata = multer({

    fileFilter: function (req, file, cb) {

        if (path.extname(file.originalname) != ".json") {

            cb(new Error("File Format Not Supported"));
        }
        cb(null, true);
    },
});

module.exports = uploaddata;

