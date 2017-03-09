import * as moment from 'moment';
import * as d3 from 'd3'

export class App {
    message = 'Hello World! 2';

    constructor() {



    }

    hello(): string {
        return moment().format();
    }

    attached() {
        const data = [{
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
        }]

        const g = d3.select('#chart')
            .selectAll("g")
            .data(data)
            .enter()
            .append('g')
        g.append("rect")
            .attr('y', 40)
            .attr('x', (d, i) => (i + 1) * 50)
            .attr('width', (d) => d.sales)
            .attr('height', (d) => d.sales)
            .attr('style','fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)')
        g.append("text")
            .attr('y', 90)
            .attr('x', (d, i) => (i + 1) * 50)
            .text((d) => d.label)
    }

}
