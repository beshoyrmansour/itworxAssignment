import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsDashboardComponent } from './maps-dashboard.component';

describe('MapsDashboardComponent', () => {
  let component: MapsDashboardComponent;
  let fixture: ComponentFixture<MapsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
