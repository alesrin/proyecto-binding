import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-recibe',
  templateUrl: './padre-recibe.component.html',
  styleUrls: ['./padre-recibe.component.css']
})
export class PadreRecibeComponent {
mensaje_recibido: string = ""

recibirMensaje(mensaje: string){
  this.mensaje_recibido = mensaje
}
}
