var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/gg', function(req, res, next) {
  res.send('respond witsh a resource');
});

module.exports = router;
