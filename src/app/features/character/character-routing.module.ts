import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/core/models/character';
import { CharactersService } from 'src/app/core/services/characters/characters.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class CharactersDataResolver implements Resolve<Character[]> {
  constructor(private characterService: CharactersService) {}

  resolve() {
    return this.characterService.all();

  }
}

@Injectable()
export class CharacterDataResolver implements Resolve<Character> {
  constructor(private characterService: CharactersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Character> {
    return this.characterService.getOne(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve : {
      entities : CharactersDataResolver
    }
  },
  {
    path: 'form',
    component: FormComponent,
    resolve : {
      entities : CharacterDataResolver
    }
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entities: CharacterDataResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CharactersDataResolver, CharacterDataResolver]
})
export class CharacterRoutingModule { }
