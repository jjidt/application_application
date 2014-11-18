var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	res.send(200, "cool");
});

module.exports = router;