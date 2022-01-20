import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { AnimalRoutingModule } from './animal-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [
    CommonModule,
    AnimalRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AnimalModule { }
