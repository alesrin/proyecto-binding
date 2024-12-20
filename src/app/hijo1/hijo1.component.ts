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
  // @Output() evente-a-enviar = new EventEmitter<string>()
  //1. Output declara la propiedad de tipo evento
  //2. Definimos el nombre del evento:favorito
  //3. Creamos el emisos de eventos que puede enviar datos de tipo string
  @Output() favorito = new EventEmitter<string>(); // Notifica al padre

  // Método que emite el evento al padre
  marcarComoFavorito() {
    if (this.producto) { //Si la condición es evaluada con verdadera, se ejecuta el fragmento de código definido a continuación
      this.favorito.emit(this.producto); // Notifica al padre
    }
  }
  //If <condicion> edad < 18{
    // bloque de código que se va a ejecutar si la condición es evaluada como verdadera
    //alert("Eres menor de edad y no puedes entrar")
    //}

  //COMUNICACIÓN HERMANOS
  @Output() colorSeleccionado = new EventEmitter<string>(); // Notifica al padre

  // Método para emitir el color seleccionado
  seleccionarColor(color: string) {
    this.colorSeleccionado.emit(color); // Emite el color al padre
  }

}
