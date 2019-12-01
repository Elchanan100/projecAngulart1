import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FamilyPageGrandsonComponent } from './componats/familyPages/family-page-grandson/family-page-grandson.component';
import { FamilyPageFatherComponent } from './componats/familyPages/family-page-father/family-page-father.component';
import { FamilyPageSonComponent } from './componats/familyPages/family-page-son/family-page-son.component';
import { DataActivComponent } from './componats/activPages/data-activ/data-activ.component';
import { CanActivatPageComponent } from './componats/activPages/can-activat-page/can-activat-page.component';
import { CanActivService } from './services/activServics/can-activ.service';
import { DynamicPageComponent } from './componats/activPages/dynamic-page/dynamic-page.component';
import { LoginPageComponent } from './componats/activPages/login-page/login-page.component';
import { Test1PipComponent } from './componats/tesxPipsEndDirctivComponates/test1-pip/test1-pip.component';
import { CowtMenuComponent } from './componats/routerChild/cowt-menu/cowt-menu.component';
import { Text1pip2Pipe } from './pipes/text1pip2.pipe';

const routes: Routes = [
  {path:'Father',component:FamilyPageFatherComponent},
  {path:'Grandson',component:FamilyPageGrandsonComponent},
  {path:'Son',component:FamilyPageSonComponent},

  {path:'Data',
  component:DataActivComponent,
  data :{  text : "hj",num:'6'}
  },

  {path:'CanActivat',
  component:CanActivatPageComponent,
   canActivate : [CanActivService]
  },
  
  {path:'User/:id', component:DynamicPageComponent },
  {path:'Login', component:LoginPageComponent },
  {path:'Test1Pip', component:Test1PipComponent },
  {path:'cowtMenu', component:CowtMenuComponent },
  {path:'Text1pip2Pipe', component:Text1pip2Pipe },
    {path:'', redirectTo:'Father',pathMatch:'full'},
    {path:'**', redirectTo:'Son',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
