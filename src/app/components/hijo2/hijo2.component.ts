import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo2',
  templateUrl: './hijo2.component.html',
  styleUrls: ['./hijo2.component.css']
})
export class Hijo2Component {
  @Input() color: string = ''; // Recibe el color seleccionado desde el padre
}
