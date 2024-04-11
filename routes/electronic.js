var express = require('express');
const electronic_controlers= require('../controllers/electronic');
var router = express.Router();
/* GET electronic */
router.get('/', electronic_controlers.electronic_view_all_Page );
/* GET detail costume page */
router.get('/detail', electronic_controlers.electronic_view_one_Page);
router.get('/create', electronic_controlers.electronic_create_Page);
router.get('/update', electronic_controlers.electronic_update_Page);
router.get('/delete', electronic_controlers.electronic_delete_Page);
module.exports = router;
