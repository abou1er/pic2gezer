import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
