import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
  }
  desplegar() {
    const newDiv = document.createElement('selector-widget') as any
    //newDiv.addEventListener('finalResponse', { hola: 'saludo' });
    newDiv.message = 'false'
    document.getElementById('widget-container')?.appendChild(newDiv)
  }
}
