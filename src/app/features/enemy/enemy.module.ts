import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { EnemyRoutingModule } from './enemy-routing.module';



@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [
    CommonModule,
    EnemyRoutingModule
  ]
})
export class EnemyModule { }
