
// jQuery.noConflict();
var jcApp = jcApp || {};

(function($,app) {

	app.index = '#tpl-index';
	app.output = $('#tpl-output');
	app.attrUrl = 'data-url';

	app.print = function (url) {
		window.console && console.log(url);
		var source   = $(url).html();
		var template = Handlebars.compile(source);
		app.output.html(template);
	};

	app.print(app.index);

	$('.tpl-link').on('click', function(e){
		e.preventDefault();
		app.print($(this).attr(app.attrUrl));
	});

	$('.external').attr('target','_blank');

})(jQuery,jcApp);
