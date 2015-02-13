// ---------------------------------------------
// Backbone Router
// ---------------------------------------------

define([
	// Path alias we defined in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'views/resume',
	'views/projects'
], function($, _, Backbone, ProjectListView, UserListView){
	var AppRouter = Backbone.Router.extend({
		routes: {
			// Define URL routes
			'/resume': 'showResume',
			'/projects': 'showProjects',

			//Default
			'*actions': 'defaultAction'
		}
	});

	var initialize = function(){
		var app_router = new AppRouter();
		app_router.on('showProjects', function(){
			// Render the project list view included in the dependency
			var projectListView = new ProjectListView();
			projectListView.render();
		});

		// Render resume view
		app_router.on("showResume",function(){
			var resumeView = new ResumeView();
			resumeView.render();
		});

		// Default action
		app_router.on('defaultAction', function(actions){
			// Log url...no route for this
			console.log('No route: ',actions);
		});
		Backbone.history.start();
	};

	return{
		initialize: initialize
	};

});