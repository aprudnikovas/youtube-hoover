

var agent = require('superagent');

exports.search = function(){

	var youtube_search = 'https://www.googleapis.com/youtube/v3/search'
		, l = arguments.length
		, cb = arguments[l-1]
		, params = {
			part : 'snippet'
			, maxResults : 50
		};

	if(l > 2){
		params['q'] = arguments[0];
		params['key'] = arguments[1];
	}

	agent.get( youtube_search ).query( params ).end(function(res){
		return cb(res.body);
	});

}