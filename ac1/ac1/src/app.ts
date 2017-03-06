import * as moment from 'moment';

export class App {
  message = 'Hello World! 2';

   constructor(){
    }

    hello() : string {
        return moment().format();
    }
}
