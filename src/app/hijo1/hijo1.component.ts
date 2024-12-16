import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-hijo1',
  templateUrl: './hijo1.component.html',
  styleUrls: ['./hijo1.component.css']
})
export class Hijo1Component {
  //Sintaxis de @Input:
    //@Input() propiedad-que-recibo-del-padre
  @Input() producto: string = ''; // Recibe el producto seleccionado
  @Output() favorito = new EventEmitter<string>(); // Notifica al padre

  // Método que emite el evento al padre
  marcarComoFavorito() {
    if (this.producto) { //Si la condición es evaluada con verdadera, se ejecuta el fragmento de código definido a continuación
      this.favorito.emit(this.producto); // Notifica al padre
    }
  }

  //COMUNICACIÓN HERMANOS
  @Output() colorSeleccionado = new EventEmitter<string>(); // Notifica al padre

  // Método para emitir el color seleccionado
  seleccionarColor(color: string) {
    this.colorSeleccionado.emit(color); // Emite el color al padre
  }

}
