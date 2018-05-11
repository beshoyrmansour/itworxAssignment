import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '@app/home/dashboard.service';

@Component({
  selector: 'app-details-dashboard',
  templateUrl: './details-dashboard.component.html',
  styleUrls: ['./details-dashboard.component.scss']
})
export class DetailsDashboardComponent implements OnInit {
  rowDetails: any;
  areas:any;
  @ViewChild('modalLarge') modalLarge: any;
  @ViewChild('myTable') table: any;
  @ViewChild('myDetailRow') detailTable: any;
  constructor(private dashboardService: DashboardService) {

  }

  ngOnInit() {
    this.dashboardService.getAreasInfo(this.dashboardService.selectedProject).subscribe(res => {
      console.log('getAreasInfo',res);
      
      this.areas = res;
    })
  }

}
