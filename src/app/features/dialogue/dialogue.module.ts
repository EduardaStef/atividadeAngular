import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { DialogueRoutingModule } from './dialogue-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    DialogueRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class DialogueModule { }
