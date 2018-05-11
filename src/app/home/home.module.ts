import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsInitiativesDashboardComponent } from './projects-initiatives-dashboard/projects-initiatives-dashboard.component';
import { SummaryDashboardComponent } from '@app/home/summary-dashboard/summary-dashboard.component';
import { MapsDashboardComponent } from './maps-dashboard/maps-dashboard.component';
import { DetailsDashboardComponent } from './details-dashboard/details-dashboard.component';
import { AgmCoreModule } from '@agm/core/core.module';
import { ChartModule } from 'angular-highcharts';
import { DashboardService } from '@app/home/dashboard.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SharedModule,
    HomeRoutingModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' }),
    ChartModule,
    NgxDatatableModule,

  ],
  declarations: [
    HomeComponent,
    ProjectsInitiativesDashboardComponent,
    SummaryDashboardComponent,
    MapsDashboardComponent,
    DetailsDashboardComponent
  ],
  providers: [DashboardService]
})
export class HomeModule { }
