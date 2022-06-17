import { Component, Inject, ElementRef, Directive, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { CargarScriptService } from '../services/cargar-script.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  widget: any;
  constructor() {
    /*let newDiv = document.createElement('script');
    newDiv.setAttribute('src', '../../assets/widgetPaymentMethods.js')
    document.head.appendChild(newDiv);*/
    let resume = document.createElement('script');
    resume.setAttribute('src', '../../assets/ALFIN.js')
    document.head.appendChild(resume);
  }

  title = 'test-packer';

  ngOnInit(): void {
    this.desplegar();
  }
  desplegar() {
    const newDiv = document.createElement('selector-widget') as any;
    //newDiv.addEventListener('finalResponse', { hola: 'saludo' });
    newDiv.message = 'true';
    document.getElementById('widget-container')!.appendChild(newDiv);
  }

}

