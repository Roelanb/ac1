import * as moment from 'moment';
import TimelineTask = require("./components/timeline/timelineTask");

export class App {

    public timelineGroups: Array<TimelineTask.TimelineGroup>;

    constructor() {
        this.createData();
    }

    public createData() {
         this.timelineGroups=new Array<TimelineTask.TimelineGroup>();

        var tl1 = new TimelineTask.TimelineGroup();
        tl1.name = "Production";
        tl1.addTask(moment('2017-03-01 00:00:00'),moment('2017-03-01 02:30:00'), "Running Printing");
        tl1.addTask(moment('2017-03-01 02:30:00'),moment('2017-03-01 05:15:00'), "Stop 125");
        this.timelineGroups.push(tl1);

        var tl2 = new TimelineTask.TimelineGroup();
        tl2.name = "Changeover";
        tl2.addTask(moment('2017-03-01 05:15:00'),moment('2017-03-01 06:10:00'), "Start");
        tl2.addTask(moment('2017-03-01 06:10:00'),moment('2017-03-01 06:45:00'), "Cleaning");
        tl2.addTask(moment('2017-03-01 06:45:00'),moment('2017-03-01 07:15:00'), "End");
        this.timelineGroups.push(tl2);
     
        var tl3 = new TimelineTask.TimelineGroup();
        tl3.name = "Production";
        tl3.addTask(moment('2017-03-01 07:15:00'),moment('2017-03-01 07:30:00'), "Running Printing");
        tl3.addTask(moment('2017-03-01 07:45:00'),moment('2017-03-01 12:15:00'), "Stop 456");
        this.timelineGroups.push(tl3);

    }


    attached() {
      
    }

}
