// ---------------------------------------------
// Filename: portfolio.js 
// Portfolio view
// ---------------------------------------------

define([
	// Path alias we defined in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/modal',
	'transit'
], function($, _, Backbone,Templates,ModalView){
	
	var PortfolioModalView = ModalView.extend({
		initialize: function () {
			_.bindAll(this,'render','toggleCard','onClose');
			// Add events
			_.extend(this.events,{
				'click ._titleButton' : 'onClose',
				'click ._overlay' : 'onClose',
				'click ._flip-container':'toggleCard'
			});
		},

		render: function () {
			var template_data = {
				title: "Portfolio",
				content: new EJS({url: '/js/templates/portfolio.ejs'}).render({title:"Portfolio"})
			};
			//Render template
			this.$el.append(this.template.render(template_data));

			//Open Modal
			this.open(template_data);

			var $cardContainer = $('._cardListContainer');

			//Load Cards
			_.each(this.collection.models, function(model){
				var params = {
					title: model.get("title"),
					languages: model.get("languages"),
					description: model.get("description")
				};

				var cardTemplate = new EJS({url: '/js/templates/card.ejs'}).render(params);

				$cardContainer.append(cardTemplate);
			});
		},
		toggleCard: function (e){
			var $target = $(e.currentTarget);
			window.s = e;
			$target.children().toggleClass("flip");
		},
		onClose: function (e) {
			var $overlay = $('#overlay');
			var $modal = $('#modal');
			var $content = $('#content');

			e.preventDefault();

			// Animate modal
			$('#modal').transition({
				y:'75%'
			},350,'ease-in', function(){
				// Remove elements after animation finished

				// Hide modal
				$modal.hide();
				$overlay.hide();
				$content.empty();
				$(window).unbind('resize.modal');

				// Remove elements --- TODO: Find better alternative
				$modal.remove();
				$overlay.remove();
				$content.remove();
			});
			// Unbind events
			$(this.el).undelegate('._flip-container','click');
		}
	});

	return PortfolioModalView;
	// What we return here will be used by other modules
});