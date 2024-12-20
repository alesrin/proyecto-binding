import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() datosEnviados = new EventEmitter<{nombre: string; edad: number; email: string}>
nombre: string = ""
edad: number = 0 
email: string = ""


enviarDatos(){ //Cuando el usuario hace click en el botón enviar:
  if (this.nombre && this.edad && this.email){
    //1. almaceno los datos recibidos en el formulario como propiedades de un objetos datosUsuario
  const datosUsuario = {
    nombre: this.nombre,
    edad: this.edad,
    email: this.email
  };
  //2. Emito (a través del evento datosEnviados) el objeto datosUsuario desde este hijo al padre en el que se encuentre
  this.datosEnviados.emit(datosUsuario);
  //3. Limpio los datos del formulario
  this.nombre = ""
  this.edad = 0
  this.email = ""
}
}


}


