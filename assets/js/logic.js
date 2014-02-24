var berloni = {};

(function(lib) {

    var version = lib.version = '0.1', f = 'foo';

    function l(m) {
        window.console && console.log(m);
    }

    (function() {
        l('Berloni App (version:' + version + ')');
    })();

    // API methods
    lib.bar = function(text) {
        var msg = text || f;
        l(msg);
        return 'Hello ' + msg;
    };

})(berloni);
