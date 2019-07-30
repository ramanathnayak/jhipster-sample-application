import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#JhipsterSampleApplicationRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#JhipsterSampleApplicationCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#JhipsterSampleApplicationLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#JhipsterSampleApplicationDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#JhipsterSampleApplicationTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#JhipsterSampleApplicationEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#JhipsterSampleApplicationJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#JhipsterSampleApplicationJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
