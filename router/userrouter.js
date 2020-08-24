const express = require('express');
const usercontroller = require('../controller/usercontroller');
const router = express.Router();

router.get('/',usercontroller.home);
module.exports = router;