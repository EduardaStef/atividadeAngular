import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { CharacterSpriteRoutingModule } from './character-sprite-routing.module';



@NgModule({
  declarations: [FormComponent, ListComponent],
  imports: [
    CommonModule,
    CharacterSpriteRoutingModule
  ]
})
export class CharacterSpriteModule { }
