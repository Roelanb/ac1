import * as moment from "moment";

export class TimelineGroup {
    name: string;
    color: string;

    start: moment.Moment;
    end: moment.Moment;
    tasks: Array<TimelineTask>;

    constructor() {
        this.tasks=new Array<TimelineTask>();
    }

    public addTask(start: moment.Moment,end: moment.Moment,name: string)
    {
        var task = new TimelineTask();

        task.start = start;
        task.end = end;
        task.name = name;
        
        this.tasks.push(task);

        if (!this.start) this.start = start;
        if (!this.end) this.end = end;

        if (this.start>start) this.start = start;
        if (this.end<end) this.end = end;
    }
}

export class TimelineTask {

    start: moment.Moment;
    end: moment.Moment;
    content: string;
    status: string;
    category: string;
    name: string;

    color: string;
    

    constructor() {

    }

    


}