(function (exports) {

    "use strict";

    var mongoose = require('mongoose');

    exports.init = function (app) {

        app.get(['/','/index'], function (req, res) {

			var data = {
					title : 'Youtube hoover'
				};

			function returnResponse(){
				return res.format({
					html: function(){
						res.render('index', data);
					},
					json: function(){
						res.send(data);
					}
				});
			}

			returnResponse();

        });

    };

}(exports));