define('app',["require", "exports", "moment", "d3"], function (require, exports, moment, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'Hello World! 2';
        }
        App.prototype.hello = function () {
            return moment().format();
        };
        App.prototype.attached = function () {
            var data = [{
                    label: "7am",
                    sales: 20
                }, {
                    label: "8am",
                    sales: 12
                }, {
                    label: "9am",
                    sales: 8
                }, {
                    label: "10am",
                    sales: 27
                }];
            var g = d3.select('#chart')
                .selectAll("g")
                .data(data)
                .enter()
                .append('g');
            g.append("circle")
                .attr('cy', 40)
                .attr('cx', function (d, i) { return (i + 1) * 50; })
                .attr('r', function (d) { return d.sales; });
            g.append("text")
                .attr('y', 90)
                .attr('x', function (d, i) { return (i + 1) * 50; })
                .text(function (d) { return d.label; });
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

define('text!app.html', ['module'], function(module) { module.exports = "<template><style>#chart div{display:inline-block;background:#4285f4;width:20px;margin-right:3px}</style><require from=\"bootstrap/css/bootstrap.css\"></require><h1>${message} ${hello()}</h1><svg id=\"chart\"></svg><div class=\"dropdown\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Dropdown <span class=\"caret\"></span></button><ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\"><li><a href=\"#\">Action</a></li><li><a href=\"#\">Another action</a></li><li><a href=\"#\">Something else here</a></li><li role=\"separator\" class=\"divider\"></li><li><a href=\"#\">Separated link</a></li></ul></div><button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-align-left\" aria-hidden=\"true\"></span></button></template>"; });
//# sourceMappingURL=app-bundle.js.map