var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Perka resume submission' });
});

router.post('/', function(req, res) {
  	res.status(200).send(req.body);
});


module.exports = router;
