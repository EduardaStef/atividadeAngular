import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Dialogue } from 'src/app/core/models/dialogue';
import { DialoguesService } from 'src/app/core/services/dialogues/dialogues.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class DialoguesDataResolver implements Resolve<Dialogue[]> {
  constructor(private dialoguesService: DialoguesService) {}

  resolve() {
    return this.dialoguesService.all();
  }
}

@Injectable()
export class DialogueDataResolver implements Resolve<Dialogue> {
  constructor(private dialoguesService: DialoguesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Dialogue> {
    return this.dialoguesService.getOne(route.params.id);
  }
}
const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: DialoguesDataResolver,
    },
  },
  {
    path: 'list',
    component: FormComponent,
    resolve: {
      entities: DialogueDataResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DialoguesDataResolver,DialogueDataResolver]
})
export class DialogueRoutingModule { }
