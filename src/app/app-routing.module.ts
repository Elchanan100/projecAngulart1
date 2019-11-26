import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyPageGrandsonComponent } from './componats/familyPages/family-page-grandson/family-page-grandson.component';
import { FamilyPageFatherComponent } from './componats/familyPages/family-page-father/family-page-father.component';
import { FamilyPageSonComponent } from './componats/familyPages/family-page-son/family-page-son.component';


const routes: Routes = [
  {path:'Father',component:FamilyPageFatherComponent},
  {path:'Grandson',component:FamilyPageGrandsonComponent},
  {path:'Son',component:FamilyPageSonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
