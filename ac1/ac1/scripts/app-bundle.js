define('app',["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World! 2';
        }
        App.prototype.hello = function () {
            return moment().format();
        };
        return App;
    }());
    exports.App = App;
});

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

define('main',["require", "exports", "./environment", "bootstrap"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Promise.config({
        warnings: {
            wForgottenReturn: false
        }
    });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><h1>${message} ${hello()}</h1><div class=\"dropdown\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Dropdown <span class=\"caret\"></span></button><ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\"><li><a href=\"#\">Action</a></li><li><a href=\"#\">Another action</a></li><li><a href=\"#\">Something else here</a></li><li role=\"separator\" class=\"divider\"></li><li><a href=\"#\">Separated link</a></li></ul></div><button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-align-left\" aria-hidden=\"true\"></span></button></template>"; });
//# sourceMappingURL=app-bundle.js.map