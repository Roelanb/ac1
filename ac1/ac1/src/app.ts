import * as moment from 'moment';
import TimelineTask = require("./components/timeline/timelineTask");

export class App {

    public timelineTasks: Array<TimelineTask.TimelineTask>;

    constructor() {
        this.createData();
    }

    public createData() {
         this.timelineTasks=new Array<TimelineTask.TimelineTask>();

        var tl1 = new TimelineTask.TimelineTask();
        tl1.start=moment('2017-03-01 00:00:00');
        tl1.end=moment('2017-03-01 02:30:00');
        tl1.taskName="Task1";

        this.timelineTasks.push(tl1);

        var tl2 = new TimelineTask.TimelineTask();
        tl2.start=moment('2017-03-01 02:30:00');
        tl2.end=moment('2017-03-01 05:15:00');
        tl2.taskName="Task2";

        this.timelineTasks.push(tl2);
    }


    attached() {
      
    }

}
