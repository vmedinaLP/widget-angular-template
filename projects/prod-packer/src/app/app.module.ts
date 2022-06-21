import { NgModule, Injector } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MyLibModule } from 'my-lib'
import { AppComponent } from './components/app.component'
import { createCustomElement } from '@angular/elements'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MyLibModule],
  providers: [],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private injector: Injector) {
    const imagenEspacio = createCustomElement(AppComponent, { injector })
    customElements.define('selector-widget', imagenEspacio)
  }
}
