const express = require('express');

const router = express.Router();

const jobsApi = require("../../../controllers/api/v1/jobs_api");


router.get('/', jobsApi.getAllJobs);
router.get('/:recruiterId', jobsApi.getJobsByRecruiter);
router.post('/createJob',jobsApi.create);

module.exports = router;