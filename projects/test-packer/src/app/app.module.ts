import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyLibModule } from 'my-lib';
import { AppComponent } from './components/app.component';
/**init service */
import { CargarScriptService } from './services/cargar-script.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyLibModule
  ],
  providers: [CargarScriptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
