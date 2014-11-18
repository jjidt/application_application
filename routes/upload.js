var express = require('express');
var router = express.Router();
var JSONrequest = require('request-json');
var externalApiUrl = require('../constants').externalApiUrl;
console.log(externalApiUrl);
var client = JSONrequest.newClient(externalApiUrl);
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
	client.post('', body, function(err, response, body) {
		if(response.statusCode === 200) {
			res.send(response);
		}
	});
});

module.exports = router;