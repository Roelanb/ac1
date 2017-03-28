define('app',["require", "exports", "moment", "./components/timeline/timelineTask"], function (require, exports, moment, TimelineTask) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.createData();
        }
        App.prototype.createData = function () {
            this.timelineTasks = new Array();
            var tl1 = new TimelineTask.TimelineTask();
            tl1.start = moment('2017-03-01 00:00:00');
            tl1.end = moment('2017-03-01 02:30:00');
            tl1.taskGroup = "Production";
            tl1.taskName = "Running Printing";
            this.timelineTasks.push(tl1);
            var tl2 = new TimelineTask.TimelineTask();
            tl2.start = moment('2017-03-01 02:30:00');
            tl2.end = moment('2017-03-01 05:15:00');
            tl2.taskGroup = "Production";
            tl2.taskName = "Stop 125";
            this.timelineTasks.push(tl2);
            var tl3 = new TimelineTask.TimelineTask();
            tl3.start = moment('2017-03-01 05:15:00');
            tl3.end = moment('2017-03-01 06:10:00');
            tl3.taskGroup = "ChangeOver";
            tl3.taskName = "Start";
            this.timelineTasks.push(tl3);
            var tl4 = new TimelineTask.TimelineTask();
            tl4.start = moment('2017-03-01 06:10:00');
            tl4.end = moment('2017-03-01 06:45:00');
            tl4.taskGroup = "ChangeOver";
            tl4.taskName = "Cleaning";
            this.timelineTasks.push(tl4);
            var tl5 = new TimelineTask.TimelineTask();
            tl5.start = moment('2017-03-01 06:45:00');
            tl5.end = moment('2017-03-01 07:05:00');
            tl5.taskGroup = "ChangeOver";
            tl5.taskName = "Ending";
            this.timelineTasks.push(tl5);
            var tl6 = new TimelineTask.TimelineTask();
            tl6.start = moment('2017-03-01 07:05:00');
            tl6.end = moment('2017-03-01 12:15:00');
            tl6.taskGroup = "Production";
            tl6.taskName = "Running Printing";
            this.timelineTasks.push(tl6);
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
define('components/timeline/timeline-component',["require", "exports", "aurelia-framework", "moment", "d3"], function (require, exports, aurelia_framework_1, moment, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimelineComponent = (function () {
        function TimelineComponent() {
            this.timelineWidth = 500;
            this.startDate = moment('2017-03-01 00:00:00');
            this.endDate = moment('2017-03-02 00:00:00');
        }
        TimelineComponent.prototype.created = function (view) {
        };
        TimelineComponent.prototype.bind = function (bindingContext, overrideContext) {
        };
        TimelineComponent.prototype.unbind = function () {
        };
        TimelineComponent.prototype.attached = function () {
            this.createD3();
        };
        TimelineComponent.prototype.createD3 = function () {
            var data = [];
            for (var _i = 0, _a = this.timelineTasks; _i < _a.length; _i++) {
                var tlt = _a[_i];
                var width = +this.endDate.format('X') - +this.startDate.format('X');
                var positionStart = 1 - (+this.endDate.format('X') - +tlt.start.format('X')) / width;
                ;
                var positionEnd = 1 - (+this.endDate.format('X') - +tlt.end.format('X')) / width;
                ;
                data.push({
                    xPos: this.timelineWidth * positionStart,
                    yPos: 1,
                    stopcode: 1,
                    stopcodeDescr: tlt.taskName,
                    duration: this.timelineWidth * (positionEnd - positionStart),
                });
            }
            var g = d3.select('#' + this.timelineId)
                .selectAll("g")
                .data(data)
                .enter()
                .append('g');
            g.append("rect")
                .attr('y', this.row * 40)
                .attr('x', function (d) { return d.xPos; })
                .attr('width', function (d) { return d.duration; })
                .attr('height', 20)
                .attr('style', 'fill:rgb(125,0,255);stroke-width:0;stroke:rgb(0,0,0)');
        };
        TimelineComponent.prototype.detached = function () {
        };
        return TimelineComponent;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], TimelineComponent.prototype, "timelineTasks", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], TimelineComponent.prototype, "timelineId", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Number)
    ], TimelineComponent.prototype, "row", void 0);
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

define('text!app.html', ['module'], function(module) { module.exports = "<template><style>#chart div{display:inline-block;background:#4285f4;width:20px;margin-right:3px}</style><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"components/timeline/timeline-component\"></require><timeline-component row.bind=\"1\" timeline-id=\"tl1\" timeline-tasks.bind=\"timelineTasks\"></timeline-component></template>"; });
define('text!components/timeline/timeline-component.html', ['module'], function(module) { module.exports = "<template><svg id=\"${timelineId}\"></svg></template>"; });
//# sourceMappingURL=app-bundle.js.map