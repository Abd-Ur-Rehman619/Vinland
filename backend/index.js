const express = require("express");
const cors = require("cors");
const app = express();

const propertiesRoute = require("./routes/propertiesRoute");

app.use(express.json());
app.use(cors());
app.use(propertiesRoute);

app.listen("3000");
