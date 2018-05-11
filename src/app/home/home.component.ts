import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { DashboardService } from '@app/home/dashboard.service';
import { Project } from '@app/shared/models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  selectedProject: Project;
  isLoading: boolean;
  InitiativesAndProjects: any;

  constructor(private dashboardService: DashboardService) {
    dashboardService.selectedProjectId = 0;
    dashboardService.getProjectInfoById(dashboardService.selectedProjectId).subscribe((project) => {
      this.selectedProject = project;
    });
  }

  ngOnInit() {
    this.dashboardService.selectedProjectId = 0;
    this.dashboardService.getProjectInfoById(this.dashboardService.selectedProjectId).subscribe((project) => {
      this.selectedProject = project;
    });
    this.dashboardService.getInitiativesAndProjects().subscribe((res) => {
      this.InitiativesAndProjects = res;
    })
  }

}
