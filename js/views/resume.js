// ---------------------------------------------
// Filename: Resume.js
// Resume Module View
// ---------------------------------------------

define([
	// Path alias we defined in our bootstrap
	'jquery',
	'underscore',
	'backbone',
	'templates',
	'views/modal'
], function($, _, Backbone, Templates,ModalView){
	
	var ResumeModalView = ModalView.extend({

		initialize: function (){
			//!!!!!!BIND FUNCTIONS!!!!!

			// this.template = new EJS({url: '/js/templates/resume.ejs'});
			
			// Add events
			_.extend(this.events,{'click ._titleButton' : 'onClose'});
		},

		render: function (){
			var template_data = {
				title: "Resume",
				content: new EJS({url: '/js/templates/resume.ejs'}).render({title:"Resume"})
			};
			//Render template
			this.$el.append(this.template.render(template_data));

			//Open Modal
			this.open(template_data);
		}




	});
	return ResumeModalView;
});