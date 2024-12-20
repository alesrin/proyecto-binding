import { Component } from '@angular/core';

@Component({
  selector: 'app-hijoview',
  templateUrl: './hijoview.component.html',
  styleUrls: ['./hijoview.component.css']
})
export class HijoviewComponent {
mensaje: string = "Hola soy el mensaje de componente hijo"

generarMensaje(){
  alert(this.mensaje)
}

cambiarMensaje(nuevoMensaje: string){
  this.mensaje = nuevoMensaje
  alert(this.mensaje)
}


}
