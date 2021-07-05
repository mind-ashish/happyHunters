const express = require('express');

const router = express.Router();

const candidatesApi = require("../../../controllers/api/v1/candidates_api");


router.get('/:jobId', candidatesApi.getCandidates);

module.exports = router;