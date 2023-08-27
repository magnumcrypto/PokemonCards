import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})

export class SaludoComponent implements OnInit {

  //Input -> información que va de padres a hijos
  @Input() nombre: string = "Vankov";
  //Output-> información que va hijos a padres
  @Output() mensajeEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    //Instrucciones previas a la renderización del componente
    console.log("ngOnInit del componente Saludo");
  }

  //Ejemplo para gestionar un evento en el DOM
  /* getUsuario(): void {
    alert(`¿Estas listo para cazar ${this.nombre}?`);
  } */

  //Ejemplo para gestionar un evento de tipo click en el DOM y enviar un texto al componte padre
  enviarMensajeAlPadre(): void {
    this.mensajeEmitter.emit(`¿Estas listo para cazar ${this.nombre}?`);
  }
}
