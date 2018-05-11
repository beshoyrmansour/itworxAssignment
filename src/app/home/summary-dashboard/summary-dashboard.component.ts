import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-summary-dashboard',
  templateUrl: './summary-dashboard.component.html',
  styleUrls: ['./summary-dashboard.component.scss']
})
export class SummaryDashboardComponent implements OnInit {
  @Input() name: string;
  @Input() owner: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() oldActual: number;
  @Input() achieved: number;
  @Input() currentTarget: number;
  @Input() nextTarget: number;
  @Input() InitiativesAndProjects: any;
  chart: Chart;

  
  constructor() { }

  ngOnInit() {
    this.chart = new Chart({
      chart: {
        type: 'line',
        width: 300,

      },
      series: [{
        name: 'Line 1',
        data: [1, 2, 3, 8, 10, 4]
      }, {
        name: 'Line 2',
        data: [9, 5, 4]
      }]
    });
  }

  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }
}






