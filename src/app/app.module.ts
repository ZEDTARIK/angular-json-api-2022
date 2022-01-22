import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './component/employees/employee-list/employee-list.component';
import { EmployeeCreateComponent } from './component/employees/employee-create/employee-create.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './component/shared/page-not-found/page-not-found.component';
import { NavbarComponent } from './component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCreateComponent,
    PageNotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
