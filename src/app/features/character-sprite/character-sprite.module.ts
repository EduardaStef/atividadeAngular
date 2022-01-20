import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { CharacterSpriteRoutingModule } from './character-sprite-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [
    CommonModule,
    CharacterSpriteRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class CharacterSpriteModule { }
