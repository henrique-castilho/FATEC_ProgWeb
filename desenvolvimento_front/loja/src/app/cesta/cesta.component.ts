import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../model/cesta';
import { Item } from '../model/item';
import { CestaService } from '../service/cesta.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  public mensagem: string = "";
  public cesta: Cesta = new Cesta();
  public itens: Item[] = [];
  public total: number = 0;

  constructor(private service: CestaService){
    let json = localStorage.getItem("cesta");
    if(json!=null) {
      this.cesta = JSON.parse(json);
    } else {
      this.mensagem = "Cesta vazia, adicione novos itens!";
    }
  }  

  public removerItem(obj:Item) {
    this.cesta.itens = this.cesta.itens.filter(item => item != obj);
    this.cesta.total = 0; //Atualiza o valor total da cesta
    for(let i=0; i<this.cesta.itens.length; i++){
      this.cesta.total = this.cesta.itens[i].valor+this.cesta.total;
    }
    console.log(this.cesta);
    localStorage.setItem("cesta", JSON.stringify(this.cesta));
  }

  public limparCesta(){
    localStorage.removeItem("cesta");
    this.cesta = new Cesta();
    this.mensagem = "Cesta vazia, adicione novos itens!";
  }

  gravarPedido(){
    let jsonCliente = localStorage.getItem("cliente");
    if(jsonCliente != null) {
      this.cesta.cliente = JSON.parse(jsonCliente);
      this.cesta.total = this.total;
      this.service.gravarPedido(this.cesta).subscribe({
        next:(data)=>{
          let novoPedido = data;
          this.gravarItens(novoPedido);
        },
        error:(err)=>{this.mensagem = "Ocorreu um erro tente mais tarde!";}
      });
    } else {
      this.mensagem = "Faça o login para gravar o pedido !!!";
    }
 }

 gravarItens(novoPedido: Cesta){
    for(let obj of this.cesta.itens){
        obj.codigoCesta = novoPedido.codigo
    }
    this.service.gravarItem(this.cesta.itens).subscribe({
      next:(data)=>{
        this.mensagem="Pedido "+ novoPedido.codigo + " gravado com sucesso!!!";
        this.limparCesta();
      },
      error:(err)=>{this.mensagem = "Ocorreu um erro tente mais tarde!";}
  });
 }
}