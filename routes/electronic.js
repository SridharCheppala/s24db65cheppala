var express = require('express');
const electronic_controlers= require('../controllers/electronic');
var router = express.Router();
/* GET electronic */
router.get('/', electronic_controlers.electronic_view_all_Page );
module.exports = router;
