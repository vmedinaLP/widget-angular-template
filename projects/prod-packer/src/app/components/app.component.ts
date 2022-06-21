import { Component, Input, ViewEncapsulation } from '@angular/core'
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  @Input()
  set message(message: any) {}
  title = 'prod-packer'
  constructor() {}
}
