

var agent = require('superagent');

exports.search = function(){

	var youtube_search = 'https://www.googleapis.com/youtube/v3/search'
		, key = '' // app key
		, l = arguments.length
		, cb = arguments[l-1]
		, params = {
			part : 'snippet'
			, key : key
			, maxResults : 50
		};

	if(l > 1){
		params['q'] = arguments[0];
	}

	agent.get( youtube_search ).query( params ).end(function(res){
		return cb(res.body);
	});

}