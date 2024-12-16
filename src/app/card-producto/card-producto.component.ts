import { Component, Input } from '@angular/core';

@Component({
  selector: 'producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css']
})
export class CardProductoComponent {
@Input() srcImagen: string = ""
@Input() tituloProducto: string = ""
@Input() precioProducto: number = 0
@Input() categoriaProducto: string = ""
@Input() altProducto: string = ""
}
