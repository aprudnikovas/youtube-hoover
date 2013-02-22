(function (exports) {

    "use strict";

    var youtube = require('../services/youtube');

    exports.init = function (app) {

        app.get(['/','/index'], function (req, res) {

			var data = {
					title : 'Youtube hoover'
					, query : req.query
				};

			return res.format({
				html: function(){
					res.render('index', data);
				},
				json: function(){
					res.send(data);
				}
			});

        });

		app.get('/setKey', function (req, res) {

			app.set('youtubeKey',req.query.id)

			var data = {
				title : 'Youtube hoover'
				, query : req.query
			};

			console.log( '>>> key : ' + app.get('youtubeKey') )

			return res.format({
				html: function(){
					res.render('index', data);
				},
				json: function(){
					res.send(data);
				}
			});

		});

		app.get('/search', function (req, res) {

			var data = {
				title : 'Youtube hoover'
				, query : req.query
				, results : {}
			};

			function show(response){

				data.results = response;

				return res.format({
					html: function(){
						res.render('index', data);
					},
					json: function(){
						res.send(data);
					}
				});

			}

			youtube.search(app.get('youtubeKey'),req.query.q, show);

		});

		app.get('/video/:id', function (req, res) {

			var data = {
				title : 'Youtube hoover'
				, query : req.query
				, results : {}
			};

			function show(response){

				data.results = response;

				return res.format({
					html: function(){
						res.render('video', data);
					},
					json: function(){
						res.send(data);
					}
				});

			}

			youtube.findVideo(app.get('youtubeKey'),req.params.id,show);

		});

		app.get('/channel/:id', function (req, res) {

			var data = {
				title : 'Youtube hoover'
				, query : req.query
				, results : {}
			};

			function show(response){

				data.results = response;

				return res.format({
					html: function(){
						res.render('channel', data);
					},
					json: function(){
						res.send(data);
					}
				});

			}

			youtube.findChannel(app.get('youtubeKey'),req.params.id,show);

		});

		app.get('/playlist/:id', function (req, res) {

			var data = {
				title : 'Youtube hoover'
				, query : req.query
				, results : {}
			};

			function show(response){

				data.results = response;

				return res.format({
					html: function(){
						res.render('playlist', data);
					},
					json: function(){
						res.send(data);
					}
				});

			}

			youtube.findPlaylistItems(app.get('youtubeKey'),req.params.id,show);

		});

    };

}(exports));