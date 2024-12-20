import { Component, ViewChild } from '@angular/core';
import { HijoviewComponent } from 'src/app/components/hijoview/hijoview.component';

@Component({
  selector: 'app-padreview',
  templateUrl: './padreview.component.html',
  styleUrls: ['./padreview.component.css']
})
export class PadreviewComponent {

@ViewChild(HijoviewComponent) hijoview!: HijoviewComponent;

interactuarHijo(){
if (this.hijoview){
  this.hijoview.generarMensaje()
}
}

actualizarHijo(){
if (this.hijoview){
  this.hijoview.cambiarMensaje("Soy el nuevo mensaje que emito desde el padre")
}
}

}
