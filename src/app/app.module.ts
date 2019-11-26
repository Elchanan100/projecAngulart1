import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyPageGrandsonComponent } from './componats/familyPages/family-page-grandson/family-page-grandson.component';
import { FamilyPageFatherComponent } from './componats/familyPages/family-page-father/family-page-father.component';
import { FamilyPageSonComponent } from './componats/familyPages/family-page-son/family-page-son.component';
import { DataActivComponent } from './componats/activPages/data-activ/data-activ.component';
import { CanActivatPageComponent } from './componats/activPages/can-activat-page/can-activat-page.component';
import { DynamicPageComponent } from './componats/activPages/dynamic-page/dynamic-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FamilyPageGrandsonComponent,
    FamilyPageFatherComponent,
    FamilyPageSonComponent,
    DataActivComponent,
    CanActivatPageComponent,
    DynamicPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
