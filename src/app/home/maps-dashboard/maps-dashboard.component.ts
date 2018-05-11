import { Component, OnInit } from '@angular/core';
import { DashboardService } from '@app/home/dashboard.service';
import { AreaMap } from '@app/shared/models/Area-map';
import { Project } from '@app/shared/models/project';

@Component({
  selector: 'app-maps-dashboard',
  templateUrl: './maps-dashboard.component.html',
  styleUrls: ['./maps-dashboard.component.scss']
})
export class MapsDashboardComponent implements OnInit {

  constructor(private dashboardService: DashboardService) {

  }
  areas: Array<AreaMap>;
  ngOnInit() {
    this.areasMapData();
  }
  areasMapData() {
    this.areas = Array<AreaMap>();
    if (!this.dashboardService.selectedProject) {
      this.dashboardService.getProjectInfoById(this.dashboardService.selectedProjectId)
        .subscribe((project) => {
          this.getAllMapsInfo(project)
        });
    } else {      
      this.getAllMapsInfo(this.dashboardService.selectedProject)
    }
  }
  getAllMapsInfo(project: Project) {
    this.dashboardService.getAllMapsInfo(project)
      .subscribe((res) => {
        this.areas = this.dashboardService.areasMap
      })
  }
}
