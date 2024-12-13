import { Component } from '@angular/core';

@Component({
  selector: 'event-html',
  templateUrl: './event-html.component.html',
  styleUrls: ['./event-html.component.css']
})
export class EventHtmlComponent {

texto: string = ""

actualizarTexto(event: Event){
  //Convertir el event.target (Con esta propiedad recogemos toda la información del elemento HTML que ha generado el evento) a un TextArea para poder acceder a todas las propiedades del textarea
  const textarea = event.target as HTMLTextAreaElement
  this.texto = textarea.value
}

seleccion: string = ""

actualizarSelect(event : Event){
const select = event.target as HTMLSelectElement
this.seleccion = select.value
}

srcImageclicked: string = ""
altImageclicked: string = ""

trackearImagen(event: Event){
const img = event.target as HTMLImageElement
this.srcImageclicked = img.src
this.altImageclicked = img.alt
}

contenidoDiv: string = ""
contenidoParagraph: string = ""

obtenerTextoDiv(event: Event){
const div = event.target as HTMLDivElement
this.contenidoDiv = div.innerHTML
}

obtenerTextoP(event: Event){
  const p = event.target as HTMLParagraphElement 
  this.contenidoParagraph = p.innerHTML
  }

}
