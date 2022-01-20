import { Injectable, NgModule } from '@angular/core';
import { Routes, RouterModule, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UsersService } from 'src/app/core/services/users/users.service';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';

@Injectable()
export class UsersDataResolver implements Resolve<User[]> {
  constructor(private userService: UsersService) {}

  resolve() {
    return this.userService.all();

  }
}

@Injectable()
export class UserDataResolver implements Resolve<User> {
  constructor(private userService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getOne(route.params.id);
  }
}


const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    resolve: {
      entities: UsersDataResolver,
    },
  },
  {
    path: 'form',
    component: FormComponent,
    resolve: {
      entities: UserDataResolver,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsersDataResolver, UserDataResolver]
})
export class UserRoutingModule { }
