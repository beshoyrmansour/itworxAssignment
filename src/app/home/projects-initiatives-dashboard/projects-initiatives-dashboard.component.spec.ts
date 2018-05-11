import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsInitiativesDashboardComponent } from './projects-initiatives-dashboard.component';

describe('ProjectsInitiativesDashboardComponent', () => {
  let component: ProjectsInitiativesDashboardComponent;
  let fixture: ComponentFixture<ProjectsInitiativesDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsInitiativesDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsInitiativesDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
