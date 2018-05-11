import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryDashboardComponent } from './summary-dashboard.component';

describe('SummaryDashboardComponent', () => {
  let component: SummaryDashboardComponent;
  let fixture: ComponentFixture<SummaryDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
