import { bindable, autoinject } from 'aurelia-framework';
import * as moment from "moment";
import * as d3 from 'd3'
import TimelineTask = require("./timelineTask");

@autoinject

export class TimelineComponent {
    @bindable timelineGroups: Array<TimelineTask.TimelineGroup>;
    @bindable timelineId: string;
    @bindable row: number;

    public timelineWidth: number;
    public startDate: moment.Moment;
    public endDate: moment.Moment;

    constructor() {

        this.timelineWidth = 1500;
        this.startDate = moment('2017-03-01 00:00:00');
        this.endDate = moment('2017-03-02 00:00:00');
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
        var dataTasks = [];

        
        for (let tlg of this.timelineGroups) {

           
            dataTasks.push({

                xPos: +tlg.start.format('X'),
                yPos: 1,
                stopcode: 1,
                name: tlg.name,
                duration: +tlg.end.format('X')-+tlg.start.format('X'),
            });

            for (let tlt of tlg.tasks) {


               

                dataTasks.push({

                    xPos: +tlt.start.format('X'),
                    yPos: 2,
                    stopcode: 1,
                    name: tlt.name,
                    duration: +tlt.end.format('X')-+tlt.start.format('X'),
                });
            }
        }


        console.log(dataTasks);

        var scaleX = d3.scaleLinear()
                    .domain([+this.startDate.format('X'),+this.endDate.format('X')])
                    .range([0,this.timelineWidth]);
        
        var scaleW = d3.scaleLinear()
                    .domain([0,+this.endDate.format('X')-+this.startDate.format('X')])
                    .range([0,this.timelineWidth]);

        var scaleY = d3.scaleLinear()
                    .domain([0,5])
                    .range([0,100]);

        var svg = d3.select('#' + this.timelineId);

        svg.selectAll("rect")
            .data(dataTasks)
            .enter()
            .append("rect")
                .attr('y', (dg) => scaleY(dg.yPos))
                .attr('x', (dg) => scaleX(dg.xPos))
                .attr('width', (dg) => scaleW(dg.duration))
                .attr('height', scaleY(1))
                .attr('fill','blue')
                .attr('style', 'stroke-width:1;stroke:rgb(0,0,0)');

        svg.selectAll("text")
            .data(dataTasks)
            .enter()
            .append("text")
            .text((d)=>d.name)
            .attr('text-anchor','middle')
            .attr('x',(dg) => scaleX(dg.xPos))
            .attr('y',(dg) => scaleY(dg.yPos));

        // .selectAll("g")
        //     .data(dataTasks)
        //     .enter()
        //     .append('g')
        // .append("rect")
        //     .attr('y', (d) => d.yPos * 40)
        //     .attr('x', (d) => d.xPos)
        //     .attr('width', (d) => d.duration)
        //     .attr('height', 20)
        //     .attr('style', 'fill:rgb(125,0,255);stroke-width:1;stroke:rgb(0,0,0)');
    }

    detached() {

    }
}
