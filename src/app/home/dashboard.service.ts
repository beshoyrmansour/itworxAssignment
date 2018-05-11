import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { Allprojects, initiatives_and_projects } from '@app/shared/data';
import { Project } from '@app/shared/models/project';
import { Area } from '@app/shared/models/area';
import { AreaMap } from '@app/shared/models/Area-map';

@Injectable()
export class DashboardService {
  areasMap: Array<AreaMap>;
  selectedProject: Project;
  selectedProjectId:number;
  constructor() { }

  AllprojectsInfo(): Observable<Array<Project>> {
    return of(Allprojects)
  }

  getProjectInfoById(projectId: number): Observable<Project> {
    this.selectedProject = Allprojects[projectId]
    return of(this.selectedProject)
  }

  getAreasInfo(selectedproject: Project): Observable<Array<Area>> {
    let areas = new Array<Area>()
    selectedproject.projects.forEach((project: Area) => {
      areas.push(project)
    });
    return of(areas)
  }

  getAllMapsInfo(selectedproject: Project): Observable<Array<AreaMap>> {
    this.areasMap = new Array<AreaMap>()
    selectedproject.projects.forEach((projectArea: Area) => {
      this.areasMap.push({
        lat: projectArea['map']['lat'] || 0,
        lng: projectArea['map']['lng'] || 0
      })
    });
    console.log('this.areasMap : ',this.areasMap);
    
    return of(this.areasMap)
  }

  getInitiativesAndProjects(){
    return of(initiatives_and_projects)
  }

}
