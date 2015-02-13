// ---------------------------------------------
// Filename: views/projects
// Project List View
// ---------------------------------------------

define([
	'jquery',
	'underscore',
	'backbone',
	// 'templates'
], function($, _, Backbone){
	var ProjectListView = Backbone.View.extend({
		el: ('#container'),
		// template: new EJS({url: '../../../templates/project/list.ejs'}),

		render: function(){
			// Use underscore to load template with data
		    // var data = {};
		    // var compiledTemplate = _.template( projectListTemplate, data );
		    // Append our compiled template to this Views "el"

			// this.$el.append(this.template.render());

		}
	});

	// Return the view
	return ProjectListView;
});