// ---------------------------------------------
// Filename: card.js
// Portfolio card collection
// ---------------------------------------------

define([
	// Path alias we defined in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'models/card',
	'templates'
], function($, _, Backbone,CardModel){
	var CardCollection = Backbone.Collection.extend ({
		model: CardModel,
		url: '/data/portfolioCards.json'
	});
	return CardCollection;
});