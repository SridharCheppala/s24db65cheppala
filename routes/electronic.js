var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('electronic', { title: 'A serach by electronic' });
});

module.exports = router;
