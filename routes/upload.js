var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	console.log(req.body);
	var bufferString = req.files.resume.buffer.toString('base64');
	res.send(bufferString);
});

module.exports = router;