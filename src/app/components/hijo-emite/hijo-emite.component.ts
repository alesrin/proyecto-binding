import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-emite',
  templateUrl: './hijo-emite.component.html',
  styleUrls: ['./hijo-emite.component.css']
})
export class HijoEmiteComponent {
/* @Output() notificarPadre = new EventEmitter<string>() */
@Output() nombreEnviado = new EventEmitter<string>(); 
//Recogemos el nombre usuario desde la vista
nombreUsuario: string = ''; 

/* enviarMensaje(){
  this.notificarPadre.emit("Darth Vader, yo soy tu hijo")
} */

enviarNombre() {
  if (this.nombreUsuario){
  this.nombreEnviado.emit(this.nombreUsuario); 
  this.nombreUsuario = ''; }
}

}
