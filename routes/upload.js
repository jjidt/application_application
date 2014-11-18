var express = require('express');
var router = express.Router();
var JSONrequest = require('request-json');
var client = JSONrequest.newClient('http://localhost:8888/');
var bufferString;

router.post('/', function(req, res) {
	var body = req.body;
	if (req.files && req.files.resume) {
	 	bufferString = req.files.resume.buffer.toString('base64');
	 	body.resume = bufferString;
	} else {
		res.send('no file uploaded');
	}
	if (body.projects) {
		body.projects = body.projects.split(",")
	}
	client.post('', body, function(err, result, body) {
		if(err) {
			res.send(err);
		}
  			res.send(result.statusCode);
		})
});

module.exports = router;