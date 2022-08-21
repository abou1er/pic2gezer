import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from "@angular/common";
import * as fr from '@angular/common/locales/fr';

import { AppComponent } from './app.component';
import { PickEtherComponent } from './pick-ether/pick-ether.component';

@NgModule({
  declarations: [
    AppComponent,
    PickEtherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){  // ajoute un construct à l'intérieur jappel la methode importé
    registerLocaleData(fr.default);
  }
}
