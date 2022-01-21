import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Enemy } from 'src/app/core/models/enemy';
import { EnemiesService } from 'src/app/core/services/enemies/enemies.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class EnemiesDataResolver implements Resolve<Enemy[]> {
  constructor(private enemiesService: EnemiesService) {}

  resolve() {
    return this.enemiesService.all();

  }
}

@Injectable()
export class EnemyDataResolver implements Resolve<Enemy> {
  constructor(private enemiesService: EnemiesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Enemy> {
    return this.enemiesService.getOne(route.params.id);
  }
}

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: EnemiesDataResolver,
    },
  },
  {
    path: 'form',
    component: FormComponent,
    resolve: {
      entities: EnemyDataResolver,
    }
  },
    {
      path: ':id',
      component: FormComponent,
      resolve: {
        entities: EnemyDataResolver,
      },
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [EnemyDataResolver, EnemiesDataResolver]
})
export class EnemyRoutingModule { }
