// ------------------------------------
// Filename: config.js
// Bootstrap and define dependencies
// for application
// ------------------------------------

// Require.js allows us to configure shortcut alias
require.config({
	paths: {
		jquery: 'libs/jquery/jquery',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone',
		templates: 'libs/EJS/ejs_production',
		transit: 'libs/jquery/transit'
	}
});

require([

	// Load our app module and pass it to our definition function
	'app'
], function(App){
	// Initialize the app dependency
	App.initialize();
});