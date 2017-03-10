import { bindable, autoinject } from 'aurelia-framework';
import * as moment from "moment";
import * as d3 from 'd3'
import TimelineTask = require("./timelineTask");

@autoinject

export class TimelineComponent {
    @bindable TimelineTasks: Array<TimelineTask.TimelineTask>;

    constructor() {


    }


    created(view) {

    }

    bind(bindingContext, overrideContext) {

    }

    unbind() {

    }

    attached() {
        const data = [{
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
        }]

        const g = d3.select('#timeline')
            .selectAll("g")
            .data(data)
            .enter()
            .append('g')
        g.append("rect")
            .attr('y', 40)
            .attr('x', (d, i) => (i + 1) * 50)
            .attr('width', (d) => d.duration)
            .attr('height', 10)
            .attr('style', 'fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)')
    }

    detached() {

    }
}
