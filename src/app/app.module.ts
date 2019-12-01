import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyPageGrandsonComponent } from './componats/familyPages/family-page-grandson/family-page-grandson.component';
import { FamilyPageFatherComponent } from './componats/familyPages/family-page-father/family-page-father.component';
import { FamilyPageSonComponent } from './componats/familyPages/family-page-son/family-page-son.component';
import { DataActivComponent } from './componats/activPages/data-activ/data-activ.component';
import { CanActivatPageComponent } from './componats/activPages/can-activat-page/can-activat-page.component';
import { DynamicPageComponent } from './componats/activPages/dynamic-page/dynamic-page.component';
import { LoginPageComponent } from './componats/activPages/login-page/login-page.component';
import { CowtMenuComponent } from './componats/routerChild/cowt-menu/cowt-menu.component';
import { CowtAComponent } from './componats/routerChild/cowt-a/cowt-a.component';
import { CowtBComponent } from './componats/routerChild/cowt-b/cowt-b.component';
import { CowtCComponent } from './componats/routerChild/cowt-c/cowt-c.component';
import { Test1PipComponent } from './componats/tesxPipsEndDirctivComponates/test1-pip/test1-pip.component';
import { Test2PipComponent } from './componats/tesxPipsEndDirctivComponates/test2-pip/test2-pip.component';
import { Test1DirectivComponent } from './componats/tesxPipsEndDirctivComponates/test1-directiv/test1-directiv.component';
import { Test2DirectivComponent } from './componats/tesxPipsEndDirctivComponates/test2-directiv/test2-directiv.component';
import { Text1pipPipe } from './pipes/text1pip.pipe';
import { Text1directivDirective } from './directivs/text1directiv.directive';
import { Text1pip2Pipe } from './pipes/text1pip2.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FamilyPageGrandsonComponent,
    FamilyPageFatherComponent,
    FamilyPageSonComponent,
    DataActivComponent,
    CanActivatPageComponent,
    DynamicPageComponent,
    LoginPageComponent,
    CowtMenuComponent,
    CowtAComponent,
    CowtBComponent,
    CowtCComponent,
    Test1PipComponent,
    Test2PipComponent,
    Test1DirectivComponent,
    Test2DirectivComponent,
    Text1pipPipe,
    Text1directivDirective,
    Text1pip2Pipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
