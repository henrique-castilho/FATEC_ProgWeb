import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';

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

  public adicionarItem(obj:Produto) {
    let json = localStorage.getItem("cesta");
    let jsonCliente = localStorage.getItem("cliente")
    let cesta: Cesta = new Cesta();
    let item: Item = new Item();
    if(json==null) { //Cesta não existe
      item.codigo = obj.codigo;
      item.produto= obj;
      item.quantidade=1;
      item.valor = obj.valor
      cesta.codigo = 1;
      cesta.total = obj.valor;
      cesta.itens.push(item);
      if(jsonCliente!=null) cesta.cliente = JSON.parse(jsonCliente);
    } else { //Cesta existe
      let achou = false
      cesta = JSON.parse(json);
      for(let i=0; i<cesta.itens.length; i++){
        if(cesta.itens[i].codigo == obj.codigo) { // Item ja existe
          cesta.itens[i].quantidade = cesta.itens[i].quantidade + 1;
          cesta.itens[i].valor = cesta.itens[i].quantidade * cesta.itens[i].produto.valor;
          achou = true
          break
        }
      }
      if (!achou) {
        item.codigo = obj.codigo;
        item.produto= obj;
        item.quantidade=1;
        item.valor = obj.valor
        cesta.itens.push(item);
      }
    }

    cesta.total = 0; //Atualiza o valor total da cesta
    for(let i=0; i<cesta.itens.length; i++){
      cesta.total = cesta.itens[i].valor + cesta.total;
    }
    localStorage.setItem("cesta", JSON.stringify(cesta));
    window.location.href="./cesta"
  }
}
