define('app',["require", "exports", "moment", "./components/timeline/timelineTask"], function (require, exports, moment, TimelineTask) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.createData();
        }
        App.prototype.createData = function () {
            this.timelineGroups = new Array();
            var tl1 = new TimelineTask.TimelineGroup();
            tl1.name = "Production1";
            tl1.addTask(moment('2017-03-01 00:00:00'), moment('2017-03-01 02:30:00'), "Running Printing");
            tl1.addTask(moment('2017-03-01 02:30:00'), moment('2017-03-01 05:15:00'), "Stop 125");
            this.timelineGroups.push(tl1);
            var tl2 = new TimelineTask.TimelineGroup();
            tl2.name = "Changeover";
            tl2.addTask(moment('2017-03-01 05:15:00'), moment('2017-03-01 06:00:00'), "Start");
            tl2.addTask(moment('2017-03-01 06:00:00'), moment('2017-03-01 06:45:00'), "Cleaning");
            tl2.addTask(moment('2017-03-01 06:45:00'), moment('2017-03-01 07:15:00'), "End");
            this.timelineGroups.push(tl2);
            var tl3 = new TimelineTask.TimelineGroup();
            tl3.name = "Production2";
            tl3.addTask(moment('2017-03-01 07:15:00'), moment('2017-03-01 08:30:00'), "Running Printing");
            tl3.addTask(moment('2017-03-01 08:30:00'), moment('2017-03-01 12:15:00'), "Stop 456");
            this.timelineGroups.push(tl3);
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
            this.timelineWidth = 1500;
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
            var dataTasks = [];
            for (var _i = 0, _a = this.timelineGroups; _i < _a.length; _i++) {
                var tlg = _a[_i];
                dataTasks.push({
                    xPos: +tlg.start.format('X'),
                    yPos: 1,
                    stopcode: 1,
                    name: tlg.name,
                    duration: +tlg.end.format('X') - +tlg.start.format('X'),
                });
                for (var _b = 0, _c = tlg.tasks; _b < _c.length; _b++) {
                    var tlt = _c[_b];
                    dataTasks.push({
                        xPos: +tlt.start.format('X'),
                        yPos: 2,
                        stopcode: 1,
                        name: tlt.name,
                        duration: +tlt.end.format('X') - +tlt.start.format('X'),
                    });
                }
            }
            console.log(dataTasks);
            var scaleX = d3.scaleLinear()
                .domain([+this.startDate.format('X'), +this.endDate.format('X')])
                .range([0, this.timelineWidth]);
            var scaleW = d3.scaleLinear()
                .domain([0, +this.endDate.format('X') - +this.startDate.format('X')])
                .range([0, this.timelineWidth]);
            var scaleY = d3.scaleLinear()
                .domain([0, 5])
                .range([0, 100]);
            var svg = d3.select('#' + this.timelineId);
            svg.selectAll("rect")
                .data(dataTasks)
                .enter()
                .append("rect")
                .attr('y', function (dg) { return scaleY(dg.yPos); })
                .attr('x', function (dg) { return scaleX(dg.xPos); })
                .attr('width', function (dg) { return scaleW(dg.duration); })
                .attr('height', scaleY(1))
                .attr('fill', 'blue')
                .attr('style', 'stroke-width:1;stroke:rgb(0,0,0)');
            svg.selectAll("text")
                .data(dataTasks)
                .enter()
                .append("text")
                .text(function (d) { return d.name; })
                .attr('text-anchor', 'middle')
                .attr('x', function (dg) { return scaleX(dg.xPos); })
                .attr('y', function (dg) { return scaleY(dg.yPos); });
        };
        TimelineComponent.prototype.detached = function () {
        };
        return TimelineComponent;
    }());
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], TimelineComponent.prototype, "timelineGroups", void 0);
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
    var TimelineGroup = (function () {
        function TimelineGroup() {
            this.tasks = new Array();
        }
        TimelineGroup.prototype.addTask = function (start, end, name) {
            var task = new TimelineTask();
            task.start = start;
            task.end = end;
            task.name = name;
            this.tasks.push(task);
            if (!this.start)
                this.start = start;
            if (!this.end)
                this.end = end;
            if (this.start > start)
                this.start = start;
            if (this.end < end)
                this.end = end;
        };
        return TimelineGroup;
    }());
    exports.TimelineGroup = TimelineGroup;
    var TimelineTask = (function () {
        function TimelineTask() {
        }
        return TimelineTask;
    }());
    exports.TimelineTask = TimelineTask;
});

define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"components/timeline/timeline-component\"></require><timeline-component row.bind=\"1\" timeline-id=\"tl1\" timeline-groups.bind=\"timelineGroups\"></timeline-component></template>"; });
define('text!components/timeline/timeline-component.html', ['module'], function(module) { module.exports = "<template><svg id=\"${timelineId}\" style=\"width:100%\"></svg></template>"; });
//# sourceMappingURL=app-bundle.js.map