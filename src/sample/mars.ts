import request = require('request')
request('http://api.komavideo.com/news/list', function (error, response, body) {
	if (error) {
		console.log(error)
	} else {
		console.log(body)
	}
})