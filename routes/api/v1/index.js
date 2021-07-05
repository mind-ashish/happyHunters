const express = require('express');

const router = express.Router();

router.use('/colleges', require('./colleges'));
 router.use('/jobs', require('./jobs'));
 router.use('/candidates', require('./candidates'));

module.exports = router;