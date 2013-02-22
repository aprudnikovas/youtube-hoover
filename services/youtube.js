

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

exports.findChannel = function(key,id,cb){

	var youtube_video = 'https://www.googleapis.com/youtube/v3/channels'
		, params = {
			part : 'id,snippet,contentDetails,statistics,topicDetails'
			, id : id
			, key : key
		};

	agent.get( youtube_video ).query( params ).end(function(res){
		return cb(res.body);
	});

}

exports.findPlaylist = function(key,id,cb){

	var youtube_video = 'https://www.googleapis.com/youtube/v3/playlists'
		, params = {
			part : 'id,snippet,status'
			, id : id
			, key : key
		};

	agent.get( youtube_video ).query( params ).end(function(res){
		return cb(res.body);
	});

}

exports.findPlaylistItems = function(key,id,cb){

	var youtube_video = 'https://www.googleapis.com/youtube/v3/playlistItems'
		, params = {
			part : 'id,snippet,contentDetails'
			, playlistId : id
			, key : key
			, maxResults : 50
		};

	agent.get( youtube_video ).query( params ).end(function(res){
		return cb(res.body);
	});

}