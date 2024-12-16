import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-minijuego-hijo',
  templateUrl: './minijuego-hijo.component.html',
  styleUrls: ['./minijuego-hijo.component.css']
})
export class MinijuegoHijoComponent {
  @Input() juegoTerminado: boolean = false; // Recibe si el juego ha terminado
  @Output() numeroIntento = new EventEmitter<number>(); // Emite el intento al padre

  intento: number = 0; // Número ingresado por el usuario

  // Enviar el intento al padre
  enviarIntento() {
    this.numeroIntento.emit(this.intento);
    this.intento = 0; // Reiniciar el campo
  }
}
