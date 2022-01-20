import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterSprite } from 'src/app/core/models/character-sprite';
import { CharacterSpritesService } from 'src/app/core/services/character-sprites/character-sprites.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class CharactersSpriteDataResolver implements Resolve<CharacterSprite[]> {
  constructor(private characterSpriteService: CharacterSpritesService) {}

  resolve() {
    return this.characterSpriteService.all();

  }
}

@Injectable()
export class CharacterSpriteDataResolver implements Resolve<CharacterSprite> {
  constructor(private characterSpriteService: CharacterSpritesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CharacterSprite> {
    return this.characterSpriteService.getOne(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: CharactersSpriteDataResolver,
    },
  },
  {
    path: 'form',
    component: FormComponent,
    resolve: {
      entities: CharacterSpriteDataResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CharacterSpriteDataResolver, CharactersSpriteDataResolver]
})
export class CharacterSpriteRoutingModule { }
