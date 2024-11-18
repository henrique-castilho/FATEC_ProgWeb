import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraBuscaComponent } from './barra-busca/barra-busca.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarraBuscaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'loja';
}
