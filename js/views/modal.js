// ---------------------------------------------
// Filename: modal.js
// Backbone view that creates a modal popup
// ---------------------------------------------

define([
	// Path alias we defined in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'templates'
], function($, _, Backbone){
	var ModalView = Backbone.View.extend({
		el: $('._headerBox'),
		template: new EJS({url: '/js/templates/modal.ejs'}),
		events: {
			'click ._closeButton' : 'onClose'
		},

		initialize: function () {
			_.bindAll(this,'render','open','center','onClose');
		},

		render: function (){
			//Render template
			this.$el.append(this.template.render(this.template_data));
		},

		// Open modal
		open: function (settings) {

			// Set HTML jQuery ids
			var $overlay = $('#overlay');
			var $modal = $('#modal');
			var $content = $('#content');

			// Insert content
			$content.empty().append(settings.content);

			// Set modal width and height
			$modal.css({
				width: settings.width || 'auto',
				height: settings.height || 'auto'
			});
			
			// Center modal
			this.center();

			// Bind to window
			$(window).bind('resize.modal', this.center);

			// Show
			$modal.show();
			$overlay.show();

			// Locate modal off-screen
			$('#modal').css("top","150%");

			// Animate modal
			$('#modal').transition({
				y:'-75%'
			},350,'ease-out');

		},

		// Center modal in viewport
		//TODO: Fix resize
		center: function () {
			var top, left;
			var $modal = $('#modal');


			top = Math.max($(window).height() - $modal.outerHeight(), 0 ) / 2;
			left = Math.max($(window).width() - $modal.outerWidth(), 0 ) / 2;

			$modal.css({
				top: top + $(window).scrollTop(),
				left: left +$(window).scrollLeft()
			});

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
		}



	});
	// Return View
	return ModalView;
});