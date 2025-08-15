import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { NpcRoutingModule } from './npc-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    NpcRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class NpcModule { }
