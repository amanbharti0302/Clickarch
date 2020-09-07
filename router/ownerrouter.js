const express = require('express');
const ownercontroller = require('../controller/ownercontroller');
const router = express.Router();

router.post('/getintouch',ownercontroller.getintouch);

module.exports = router;