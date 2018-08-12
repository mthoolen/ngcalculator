import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CijferknopComponent } from './atomic/atoms/cijferknop/cijferknop.component';
import { DisplayComponent } from './atomic/atoms/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    CijferknopComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
