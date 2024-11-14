import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Item } from '../model/item';
import { Cesta } from '../model/cesta';
import { ProdutoService } from '../service/produto.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './busca.component.html',
  styleUrl: './busca.component.css'
})
export class BuscaComponent {
  public mensagem: string = "";
  public filtro: string = ""
  public lista:  Produto[] = [];
  public palavraChave: string = "";
  
  constructor(private service:ProdutoService) {}

  fazerBusca(){
    this.service.buscar(this.palavraChave).subscribe({
      next:(data)=>{
        this.lista = data
        if(this.lista.length <= 0) this.mensagem = "Não existe produto!!!!!";
      },
      error:(msg)=>(this.mensagem = "Ocorreu erro tente mais tarde!!!!")
    })
  }

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
