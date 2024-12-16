import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {
texto_boton: string = ""
enviar: string = "Enviar"
back: string = "Atrás"
info: string = "Solicitar Información"
srcIronman: string = "../assets/images.jpeg"
srcThor: string = "../assets/blog-veterpet-edad-gatitos.jpg"
mostrarAlert0(){
  alert("Este es el botón de enviar")
}
mostrarAlert1(){
  alert("Este es el botón de back")
}
mostrarAlert2(){
  alert("Este es el botón de info")
}
}
