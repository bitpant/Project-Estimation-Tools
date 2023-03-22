import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-end-date',
  templateUrl: './end-date.component.html',
  styleUrls: ['./end-date.component.css']
})
export class EndDateComponent implements OnInit {

ngOnInit(): void {
  }

    startDate!: Date ;
    resourceCount: number = 1;
    totalHolidays: number = 0;
    totalMD: number = 0;
    workPercentage: number = 40;
    featureEndDate!: Date;


    calculateFeatureEndDate() {
    console.log("function called ");
            /* console.log("startDate:"+this.startDate);
             console.log("resourceCount:"+this.resourceCount);
             console.log("totalHolidays:"+this.totalHolidays);
             console.log("totalMD:"+this.totalMD);
             console.log("workPercentage:"+this.workPercentage); */
      // Convert work percentage to decimal
       const workPercentageDecimal = this.workPercentage / 100;

       // Calculate total working days based on resource count and MDs
       const totalWorkingDays = (this.totalMD) / workPercentageDecimal / this.resourceCount;

       // Subtract holidays/leaves from total working days
       const totalWorkingDaysMinusHolidays: number = (totalWorkingDays + (this.totalHolidays*3.2)/8);

       // Using moment.js to add working days to start date and set as feature end date
       /* this.featureEndDate = moment(this.startDate)
         .startOf('day')
         .add(totalWorkingDaysMinusHolidays, 'days')
         .toDate(); */

         this.featureEndDate = this.addBusinessDays(this.startDate,totalWorkingDaysMinusHolidays-1);
        /*  console.log("totalWorkingDaysMinusHolidays:"+totalWorkingDaysMinusHolidays);
         console.log("featureEndDate:"+this.featureEndDate); */

    }

    public addBusinessDays(date:Date, daysToAdd:number) {
        var cnt = 0;
        var tmpDate = moment(date);
        while (cnt < daysToAdd) {
            tmpDate = tmpDate.add('days', 1);
            if (tmpDate.weekday() != moment().day("Sunday").weekday() && tmpDate.weekday() != moment().day("Saturday").weekday()) {
                cnt = cnt + 1;
            }
        }

        return tmpDate.toDate();
    }

}
