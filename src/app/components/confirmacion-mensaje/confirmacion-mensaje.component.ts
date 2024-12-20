import { Component, Input } from '@angular/core';

@Component({
  selector: 'mensaje',
  templateUrl: './confirmacion-mensaje.component.html',
  styleUrls: ['./confirmacion-mensaje.component.css']
})
export class ConfirmacionMensajeComponent {
  @Input() mensaje: string = ''; // Recibe el mensaje desde el componente padre
}
