import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingPageComponent } from './landing-page/landing-page.component';



@NgModule({
  declarations: [PageNotFoundComponent, LandingPageComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
