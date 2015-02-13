// ---------------------------------------------
// Filename: content.js
// Main Content View
// of modules.
// ---------------------------------------------

define([
	// Path alias we defined in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/portfolio',
	'collections/card'
], function($, _, Backbone,Templates,PortfolioView,CardCollection){
	var ContentView = Backbone.View.extend({
		template: new EJS({url: '/js/templates/content.ejs'}),
		events: {
			'click ._resume': 'openResume',
			'click ._portfolio': 'openPortfolio'
		},
		render: function () {
			this.$el.append(this.template.render());
		},

		openResume: function (e) {
			e.preventDefault(); // Prevent browser from following
			window.location.href = 'img/resume.pdf';
		},

		openPortfolio: function () {
			var portfolioCards = new CardCollection();
			var portfolioView = new PortfolioView({collection: portfolioCards});
			// Fetch cards
			portfolioCards.fetch().done(function(){
				// Render view when collection is finished loading 
				portfolioView.render();
			});
		}
	});
	return ContentView;
});