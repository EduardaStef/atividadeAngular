import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AnimalModule } from './animal/animal.module';
import { CharacterModule } from './character/character.module';
import { CharacterSpriteModule } from './character-sprite/character-sprite.module';
import { DialogueModule } from './dialogue/dialogue.module';
import { EnemyModule } from './enemy/enemy.module';
import { NpcModule } from './npc/npc.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    AnimalModule,
    CharacterModule,
    CharacterSpriteModule,
    DialogueModule,
    EnemyModule,
    NpcModule,
    UserModule
  ],
  exports: [AnimalModule, CharacterModule, CharacterSpriteModule, DialogueModule, EnemyModule, NpcModule]
})
export class FeaturesModule { }
