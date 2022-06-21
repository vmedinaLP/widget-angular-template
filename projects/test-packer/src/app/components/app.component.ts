import { Component, OnInit } from '@angular/core'
import { environment } from '../../environments/environment'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  test2!: string
  constructor() {
    /*let newDiv = document.createElement('script');
    newDiv.setAttribute('src', '../../assets/widgetPaymentMethods.js')
    document.head.appendChild(newDiv);*/
    const resume = document.createElement('script')
    resume.setAttribute('src', '../../assets/ALFIN.js')
    document.head.appendChild(resume)
  }
  title = 'test-packer'
  ngOnInit(): void {
    this.desplegar()
    this.test2 = environment.SCOrigen
  }
  desplegar() {
    const newDiv = document.createElement('selector-widget') as any
    //newDiv.addEventListener('finalResponse', { hola: 'saludo' });
    newDiv.message = 'false'
    document.getElementById('widget-container')?.appendChild(newDiv)
  }
}
