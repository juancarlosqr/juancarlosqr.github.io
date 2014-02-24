
jQuery.noConflict();

(function($, b) {

    var _body = $('body');

    _body.on('click', 'a',function (event){
        event.preventDefault();
        alert(b.bar() + '\n' + b.bar('Berloni') + '\nBerloni version ' + b.version);
        _body.append(b.version).append('<br>');
    });

    window.console && console.log(b);
    window.console && console.log(window);

})(jQuery, berloni);
