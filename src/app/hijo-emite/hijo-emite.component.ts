import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-emite',
  templateUrl: './hijo-emite.component.html',
  styleUrls: ['./hijo-emite.component.css']
})
export class HijoEmiteComponent {
@Output() notificarPadre = new EventEmitter<string>()

enviarMensaje(){
  this.notificarPadre.emit("Luke, yo soy tu padre")
}

}
