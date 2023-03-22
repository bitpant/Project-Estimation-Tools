import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-date',
  templateUrl: './end-date.component.html',
  styleUrls: ['./end-date.component.css']
})
export class EndDateComponent implements OnInit {

ngOnInit(): void {
  }

  startDate: Date = new Date(); // initialize startDate property with current date
    resourceCount: number = 0;
    totalHolidays: number = 0;
    totalMD: number = 0;
    workPercentage: number = 0;
    featureEndDate: Date = new Date(); // initialize featureEndDate property with current date


    calculateFeatureEndDate() {
      // Calculate the number of workdays based on the resource count, total holidays/leaves, total MD, and work percentage.
      const workDays = this.resourceCount * (1 - this.totalMD / 100) * this.workPercentage / 100;
      const totalDays = Math.ceil(workDays + this.totalHolidays);

      // Calculate the feature end date by adding the total number of days to the start date.
      this.featureEndDate = new Date(this.startDate.getTime() + totalDays * 24 * 60 * 60 * 1000);
    }

}
