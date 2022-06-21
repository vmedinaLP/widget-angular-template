import { Component, Input, ViewEncapsulation } from '@angular/core'
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  test!: string
  state = ''
  intialData = ''
  @Input()
  set message(message: string) {
    console.log('message fron client use to test:', message)
    this.state = message
    //this.buildDataWidget = message;
  }
  title = 'prod-packer'
  constructor() {
    this.test = environment.SCOrigen
  }
}
