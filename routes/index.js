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

			if(req.query.q){
				youtube.search(req.query.q, show);
			} else {
				show(data.results)
			}

		});

    };

}(exports));