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

imagen1: string = "../assets/bufanda.jpeg"
imagen2: string = "../assets/guantes.jpg"
imagen3: string = "../assets/trineo.jpg"
imagen4: string = "../assets/esquis.jpg"
imagen5: string = "../assets/jersey.jpeg"
titulo1: string = "Bufanda"
titulo2: string = "Guantes"
titulo3: string = "Trineo"
titulo4: string = "Skies"
titulo5: string = "Jesey"
precio1: number = 10
precio2: number = 4
precio3: number = 30
precio4: number = 100
precio5: number = 15
categoria1: string = "Ropa"
categoria2: string = "Ropa"
categoria3: string = "Invierno"
categoria4: string = "Invierno"
categoria5: string = "Ropa"
alt1: string = "Imagen bufanda"
alt2: string = "Imagen guantes"
alt3: string = "Imagen trineo"
alt4: string = "Imagen Skies"
alt5: string = "Imagen Jersey"



}
