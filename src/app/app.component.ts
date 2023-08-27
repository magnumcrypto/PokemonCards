import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PokemonCards';
  nombre = 'Vankov';
  subtitle = 'Hazte con todos!';

  //Esta funcion se ejecuta cuando en el hijo (SaludoComponent) se pulsa un boton
  recibirMensajeDeHijo(evento: string) {
    alert(evento);
  }
}
