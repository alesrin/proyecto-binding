import { Component } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent {
  productos = ['Producto A', 'Producto B', 'Producto C', 'Producto A', 'Producto B', 'Producto C']; // Lista de productos
  productoSeleccionado: string = ''; // Producto que se seleccionará

  // Método que se ejecuta cuando el hijo notifica al padre
  recibirNotificacionFavorito(producto: string) {
    alert(`El producto "${producto}" ha sido marcado como favorito.`); // Notifica al usuario con un alert
  }

  //COMUNICACIÓN ENTRE HERMANOS

  colorSeleccionado: string = ''; // Color seleccionado

  // Método para actualizar el color seleccionado desde el hermano 1
  actualizarColor(color: string) {
    this.colorSeleccionado = color;
    alert(`El color seleccionado es: ${color}`); // Notifica al usuario con un alert
  } */

mensajeCompartido: string = ""

actualizarMensaje(nuevoMensaje: string){
this.mensajeCompartido = nuevoMensa
}

}
