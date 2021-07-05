const express = require('express');

const router = express.Router();

const collegesApi = require("../../../controllers/api/v1/colleges_api");


router.get('/', collegesApi.getColleges);

module.exports = router;