require("./configuration/axios");
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./configuration/MongoCon");
const sasR = require("./routes/SaRoutes");

const PORT = process.env.port || 5000;
const app = express();

connectDB();

app.use(cors());
app.use("/sas", SaRoutes);

app.listen(PORT, () => {

    console.log('server is running at port ${PORT}');
});

