import { Component } from '@angular/core';

@Component({
  selector: 'app-minijuego-padre',
  templateUrl: './minijuego-padre.component.html',
  styleUrls: ['./minijuego-padre.component.css']
})
export class MinijuegoPadreComponent {
  numeroSecreto: number = this.generarNumeroAleatorio(); // Número que el usuario debe adivinar
  mensaje: string = ''; // Mensaje que se mostrará al usuario
  juegoTerminado: boolean = false; // Controla si el juego ha terminado

  // Genera un número aleatorio entre 1 y 100
  generarNumeroAleatorio(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  // Método que recibe el intento del hijo y determina el resultado
  procesarIntento(numero: number) {
    if (numero === this.numeroSecreto) {
      this.mensaje = '¡Felicidades, has adivinado el número!';
      this.juegoTerminado = true;
    } else if (numero < this.numeroSecreto) {
      this.mensaje = 'El número es mayor, ¡sigue intentándolo!';
    } else {
      this.mensaje = 'El número es menor, ¡sigue intentándolo!';
    }
  }

  // Reinicia el juego
  reiniciarJuego() {
    this.numeroSecreto = this.generarNumeroAleatorio();
    this.mensaje = '';
    this.juegoTerminado = false;
  }
}
