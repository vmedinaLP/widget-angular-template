import { ThisReceiver } from '@angular/compiler';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'selector-widget',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  state: string = '';
  intialData: string = '';
  @Input()
  set message(message: string) {
    console.log('message fron client use to test:', message);
    this.state = message;
    //this.buildDataWidget = message;
  }

  title = 'prod-packer';
}
