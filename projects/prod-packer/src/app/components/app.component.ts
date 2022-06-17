import { Component, Input, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  state = ''
  intialData = ''
  @Input()
  set message(message: string) {
    console.log('message fron client use to test:', message)
    this.state = message
    //this.buildDataWidget = message;
  }
  title = 'prod-packer'
}
