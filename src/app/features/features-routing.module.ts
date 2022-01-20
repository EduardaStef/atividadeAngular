import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionGuard } from '../core/guards/permission.guard';
import { LandingPageComponent } from '../core/landing-page/landing-page.component';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'character',
    canActivate: [PermissionGuard],
    loadChildren:async () =>
    import('./character/character.module').then((m) => m.CharacterModule),
  },
  {
    path: 'animals',
    canActivate: [PermissionGuard],
    loadChildren:async () =>
    import('./animal/animal.module').then((m) => m.AnimalModule),
  },
  {
    path: 'characterSprite',
    canActivate: [PermissionGuard],
    loadChildren:async () =>
    import('./character-sprite/character-sprite.module').then((m) => m.CharacterSpriteModule),
  },
  {
    path: 'dialogue',
    canActivate: [PermissionGuard],
    loadChildren:async () =>
    import('./dialogue/dialogue.module').then((m) => m.DialogueModule),
  },
  {
    path: 'enemy',
    canActivate: [PermissionGuard],
    loadChildren:async () =>
    import('./enemy/enemy.module').then((m) => m.EnemyModule),
  },
  {
    path: 'npc',
    canActivate: [PermissionGuard],
    loadChildren:async () =>
    import('./npc/npc.module').then((m) => m.NpcModule),
  },
  {
    path: 'user',
    canActivate: [PermissionGuard],
    loadChildren:async () =>
    import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
