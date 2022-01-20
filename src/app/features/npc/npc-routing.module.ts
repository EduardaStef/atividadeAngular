import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Npc } from 'src/app/core/models/npc';
import { NpcsService } from 'src/app/core/services/npcs/npcs.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class NpcsDataResolver implements Resolve<Npc[]> {
  constructor(private npcService: NpcsService) {}

  resolve() {
    return this.npcService.all();

  }
}

@Injectable()
export class NpcDataResolver implements Resolve<Npc> {
  constructor(private npcService: NpcsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Npc> {
    return this.npcService.getOne(route.params.id);
  }
}


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: NpcsDataResolver,
    },
  },
  {
    path: 'form',
    component: FormComponent,
    resolve: {
      entities: NpcDataResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [NpcsDataResolver, NpcDataResolver]
})
export class NpcRoutingModule { }
