import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component  {

  void.ngModel(){ 
    nombre.any;
    apellido:any;
    celular:any;
    edad:any;
    }
    void register()
  {
    this.router.navigate(['web2'])
    localStorage.setItem('nombre', this.nombre);
    localStorage.setItem('nombre', this.apellido);
    localStorage.setItem('nombre', this.celular);
    localStorage.setItem('nombre', this.edad);
  }
}
