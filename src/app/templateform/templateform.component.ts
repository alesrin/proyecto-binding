import { Component } from '@angular/core';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent {
datosRecibidos: { nombre: string; edad: number; email: string } | null = null

recibirDatos(datos: { nombre: string; edad: number; email: string }){
  this.datosRecibidos = datos;
}
}
