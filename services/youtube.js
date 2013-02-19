

var agent = require('superagent');

exports.search = function(key,q,cb){

	var youtube_search = 'https://www.googleapis.com/youtube/v3/search'
		, params = {
			part : 'snippet'
			, maxResults : 50
			, q : q
			, key : key
		};

	agent.get( youtube_search ).query( params ).end(function(res){
		return cb(res.body);
	});

}

exports.findVideo = function(key,id,cb){

	var youtube_video = 'https://www.googleapis.com/youtube/v3/videos'
		, params = {
			part : 'id,snippet,contentDetails,player,statistics,status,topicDetails'
			, id : id
			, key : key
		};

	agent.get( youtube_video ).query( params ).end(function(res){
		return cb(res.body);
	});

}