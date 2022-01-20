import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { UserRoutingModule } from './user-routing.module';



@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
