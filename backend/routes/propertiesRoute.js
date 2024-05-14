const express = require("express");
const router = express.Router();

const properties = require("../controllers/properties");

router.get("/", properties.getProperties);

module.exports = router;
