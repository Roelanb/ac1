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
},{
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
g.append("circle")
  .attr('cy', 40)
  .attr('cx', (d, i)=> (i+1) * 50)
  .attr('r', (d)=> d.sales)
g.append("text")
  .attr('y', 90)
  .attr('x', (d, i)=> (i+1) * 50)
  .text((d)=> d.label)
    }

}
