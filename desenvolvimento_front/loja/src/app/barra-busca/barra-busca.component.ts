import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css'
})
export class BarraBuscaComponent {
  termoBusca : string = ""

  fazerBusca() {
    localStorage.setItem("termoBusca", this.termoBusca);
    window.location.href="./busca";
  }
}
