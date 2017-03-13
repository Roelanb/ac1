import { bindable, autoinject } from 'aurelia-framework';
import * as moment from "moment";
import * as d3 from 'd3'
import TimelineTask = require("./timelineTask");

@autoinject

export class TimelineComponent {
    @bindable timelineTasks: Array<TimelineTask.TimelineTask>;
    @bindable timelineId: string;
    @bindable row: number;

    public timelineWidth : number;
    public startDate: moment.Moment;
    public endDate: moment.Moment;
    
    constructor() {

        this.timelineWidth=500;
        this.startDate=moment('2017-03-01 00:00:00');
        this.endDate=moment('2017-03-02 00:00:00');
    }


    created(view) {

    }

    bind(bindingContext, overrideContext) {

    }

    unbind() {

    }

    attached() {


        this.createD3();
        
    }

    public createD3() {
        var data = [];

        for(let tlt of this.timelineTasks) {
            data.push({
                xPos: 10,
                yPos: 1,
                 stopcode: 1,
            stopcodeDescr: 'Running Dipping',
            duration: 30
            });
        }

     

        const g = d3.select('#'+this.timelineId)
            .selectAll("g")
            .data(data)
            .enter()
            .append('g')
        g.append("rect")
            .attr('y', this.row*40)
            .attr('x', (d) => d.xPos)
            .attr('width', (d) => d.duration)
            .attr('height', 10)
            .attr('style', 'fill:rgb(125,0,255);stroke-width:1;stroke:rgb(0,0,0)')
    }

    detached() {

    }
}
