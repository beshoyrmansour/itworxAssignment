import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projects-initiatives-dashboard',
  templateUrl: './projects-initiatives-dashboard.component.html',
  styleUrls: ['./projects-initiatives-dashboard.component.scss']
})
export class ProjectsInitiativesDashboardComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
