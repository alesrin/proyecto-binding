import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
  mensaje: string = ''; // Mensaje que será enviado al hijo

  // Método para actualizar el mensaje desde el input
  actualizarMensaje(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mensaje = input.value;
  }
}
