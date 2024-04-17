var express = require('express');
var passport = require('passport');
const electronic_controlers= require('../controllers/electronic');
var router = express.Router();
/* GET electronic */
router.get('/', electronic_controlers.electronic_view_all_Page );
/* GET detail costume page */
router.get('/detail', electronic_controlers.electronic_view_one_Page);
router.get('/create', electronic_controlers.electronic_create_Page);
//router.get('/update', electronic_controlers.electronic_update_Page);
//router.get('/delete', electronic_controlers.electronic_delete_Page);
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
router.get('/update', secured,electronic_controlers.electronic_update_Page);
router.get('/delete',secured, electronic_controlers.electronic_delete_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    
module.exports = router;
