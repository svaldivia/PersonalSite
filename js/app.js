// ---------------------------------------------
// Filename: app.js
// Application main module
// Initializes a Backbone Router
//
// Notes:
// Should always be light weight
// ---------------------------------------------

define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'views/content'
], function($, _, Backbone, Router,ContentView){

	var initialize = function (){
		
		//TODO: Maybe wait for the page to load
		// $(function(){  //Do shit   });

		// Load content
		var $header = $('._headerBox');
		var contentView = new ContentView({el: $header});
		contentView.render();

		// Call router's initialize function
		Router.initialize();
	};

	return{
		initialize: initialize
	};
});