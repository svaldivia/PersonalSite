// ---------------------------------------------
// Filename: card
// Portfolio card model
// ---------------------------------------------

define([
	// Path alias we defined in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function($, _, Backbone){
	var CardModel = Backbone.Model.extend ({
		defaults: {
			title: 'Project Title',
			languages: ['Java','PHP','Javascript'],
			description: 'Amazing project description'
			// status:'closed'
		}
	});
	return CardModel;
});