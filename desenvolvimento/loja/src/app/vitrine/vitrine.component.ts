import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vitrine.component.html',
  styleUrl: './vitrine.component.css'
})

export class VitrineComponent {
  public mensagem: string = "Conheça as nossas promoções";
  public lista:  Produto[] = [
    {codigo:1, nome:"Martelo", descritivo:"Martelo unha - cabo de borracha", 
      valor:30.00, quantidade:10, keywords:"Ferrammenteas manuais"
    },
    {codigo:2, nome:"Picareta", descritivo:"Picareta cabo de madeira", 
      valor:40.00, quantidade:10, keywords:"Ferrammenteas manuais"
    },
    {codigo:3, nome:"Pá", descritivo:"Pá de bico - cabo de madeira", 
      valor:50.00, quantidade:10, keywords:"Ferrammenteas manuais"
    },
    {codigo:4, nome:"Machado", descritivo:"Machado - cabo de borracha",
     valor:60.00, quantidade:10, keywords:"Ferrammenteas manuais"
    }
  ];

  public verDetalhe(item:Produto) {
    localStorage.setItem("produto", JSON.stringify(item));
    window.location.href ="./detalhe";
  }
}
