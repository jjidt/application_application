var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
	var body = req.body;
	var bufferString = req.files.resume.buffer.toString('base64');
	body.projects = body.projects.split(",");
	body.resume = bufferString;
	console.log(body);
	res.send(body);
});

module.exports = router;