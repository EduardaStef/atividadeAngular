import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AnimalModule } from './animal/animal.module';
import { CharacterModule } from './character/character.module';
import { EnemyModule } from './enemy/enemy.module';
import { NpcModule } from './npc/npc.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    AnimalModule,
    CharacterModule,
    EnemyModule,
    NpcModule
  ],
  exports: [AnimalModule, CharacterModule, EnemyModule, NpcModule]
})
export class FeaturesModule { }
