import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './component/employees/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './component/employees/employee-create/employee-create.component';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'employee/create', component: EmployeeCreateComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports:[RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
