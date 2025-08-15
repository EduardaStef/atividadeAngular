import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/core/models/animal';
import { AnimalsService } from 'src/app/core/services/animals/animals.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class AnimalsDataResolver implements Resolve<Animal[]> {
  constructor(private animalsService: AnimalsService) {}

  resolve() {
    return this.animalsService.all();

  }
}

@Injectable()
export class AnimalDataResolver implements Resolve<Animal> {
  constructor(private animalsService: AnimalsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Animal> {
    return this.animalsService.getOne(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: AnimalsDataResolver,
    },
  },
  {
    path: 'add',
    component: FormComponent
  },
  {
    path: ':id',
    component: FormComponent,
    resolve: {
      entities: AnimalDataResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AnimalDataResolver, AnimalsDataResolver],
})
export class AnimalRoutingModule { }
