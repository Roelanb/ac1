define('app',["require", "exports", "moment"], function (require, exports, moment) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.hello = function () {
            return moment().format();
        };
        App.prototype.attached = function () {
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

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/timeline/timelineComponent',["require", "exports", "aurelia-framework", "d3"], function (require, exports, aurelia_framework_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimelineComponent = (function () {
        function TimelineComponent() {
        }
        TimelineComponent.prototype.created = function (view) {
        };
        TimelineComponent.prototype.bind = function (bindingContext, overrideContext) {
        };
        TimelineComponent.prototype.unbind = function () {
        };
        TimelineComponent.prototype.attached = function () {
            var data = [{
                    stopcode: 1,
                    stopcodeDescr: 'Running Dipping',
                    duration: 20
                }, {
                    stopcode: 1,
                    stopcodeDescr: 'Running Dipping',
                    duration: 20
                }, {
                    stopcode: 1,
                    stopcodeDescr: 'Running Dipping',
                    duration: 20
                }, {
                    stopcode: 1,
                    stopcodeDescr: 'Running Dipping',
                    duration: 20
                }];
            var g = d3.select('#chart')
                .selectAll("g")
                .data(data)
                .enter()
                .append('g');
            g.append("rect")
                .attr('y', 40)
                .attr('x', function (d, i) { return (i + 1) * 50; })
                .attr('width', function (d) { return d.duration; })
                .attr('height', 10)
                .attr('style', 'fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)');
        };
        TimelineComponent.prototype.detached = function () {
        };
        return TimelineComponent;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], TimelineComponent.prototype, "TimelineTasks", void 0);
    TimelineComponent = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    exports.TimelineComponent = TimelineComponent;
});

define('components/timeline/timelineTask',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimelineTask = (function () {
        function TimelineTask() {
        }
        return TimelineTask;
    }());
    exports.TimelineTask = TimelineTask;
});

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('components/timeline/timeline-component',["require", "exports", "aurelia-framework", "d3"], function (require, exports, aurelia_framework_1, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimelineComponent = (function () {
        function TimelineComponent() {
        }
        TimelineComponent.prototype.created = function (view) {
        };
        TimelineComponent.prototype.bind = function (bindingContext, overrideContext) {
        };
        TimelineComponent.prototype.unbind = function () {
        };
        TimelineComponent.prototype.attached = function () {
            var data = [{
                    stopcode: 1,
                    stopcodeDescr: 'Running Dipping',
                    duration: 20
                }, {
                    stopcode: 1,
                    stopcodeDescr: 'Running Dipping',
                    duration: 20
                }, {
                    stopcode: 1,
                    stopcodeDescr: 'Running Dipping',
                    duration: 20
                }, {
                    stopcode: 1,
                    stopcodeDescr: 'Running Dipping',
                    duration: 20
                }];
            var g = d3.select('#timeline')
                .selectAll("g")
                .data(data)
                .enter()
                .append('g');
            g.append("rect")
                .attr('y', 40)
                .attr('x', function (d, i) { return (i + 1) * 50; })
                .attr('width', function (d) { return d.duration; })
                .attr('height', 10)
                .attr('style', 'fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)');
        };
        TimelineComponent.prototype.detached = function () {
        };
        return TimelineComponent;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], TimelineComponent.prototype, "TimelineTasks", void 0);
    TimelineComponent = __decorate([
        aurelia_framework_1.autoinject,
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    exports.TimelineComponent = TimelineComponent;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><style>#chart div{display:inline-block;background:#4285f4;width:20px;margin-right:3px}</style><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"components/timeline/timeline-component\"></require><h1>${message} ${hello()}</h1><timeline-component></timeline-component><div class=\"dropdown\"><button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">Dropdown <span class=\"caret\"></span></button><ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\"><li><a href=\"#\">Action</a></li><li><a href=\"#\">Another action</a></li><li><a href=\"#\">Something else here</a></li><li role=\"separator\" class=\"divider\"></li><li><a href=\"#\">Separated link</a></li></ul></div><button type=\"button\" class=\"btn btn-default\" aria-label=\"Left Align\"><span class=\"glyphicon glyphicon-align-left\" aria-hidden=\"true\"></span></button></template>"; });
define('text!components/timeline/timelineComponent.html', ['module'], function(module) { module.exports = "<template><svg id=\"timeline\"></svg></template>"; });
define('text!components/timeline/timeline-component.html', ['module'], function(module) { module.exports = "<template><svg id=\"timeline\"></svg></template>"; });
//# sourceMappingURL=app-bundle.js.map