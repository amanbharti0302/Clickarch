const express = require('express');
const usercontroller = require('../controller/usercontroller');
const router = express.Router();

router.get('/',usercontroller.home);
router.post('/getintouch',usercontroller.getintouch);

module.exports = router;