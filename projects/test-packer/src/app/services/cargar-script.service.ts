import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarScriptService {

  constructor() { }
  /*
  cargar() {
    let script = document.createElement('script');
    script.src = "../../assets/widgetPaymentMethods.js";
    let body = document.getElementsByTagName('body') as any;
    return body.appendChild(script);
  }*/
}
