var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	var bufferString = req.files.resume.buffer.toString('base64');
	res.send(bufferString);
});

module.exports = router;