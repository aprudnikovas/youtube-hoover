/**
 * bootstrap.js
 *
 * Create new data here required
 * for app startup. Roles,Users,...
 * */

(function (exports) {

    "use strict";

    exports.init = function (app) {

        console.log("Running bootstrap.js");

        app.configure(function(){

        });

        app.configure('test', function(){
            
        });

        app.configure('development', function(){
            
        });

        app.configure('production', function(){
            
        });

    };


}(exports));