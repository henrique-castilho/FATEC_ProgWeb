import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public mensagem: string = "";
  public obj: Cliente = new Cliente();

  public fazerLogin(){
    if(this.obj.email == "henrique@gmail.com" && this.obj.senha == "123456") {
      localStorage.setItem("cliente", JSON.stringify(this.obj));
      window.location.href="./cliente";
    } else {
      this.mensagem = "email ou senha ivalidos !!!"
      localStorage.removeItem("cliente");
    }
  }
  public novoCadastro(){
    localStorage.setItem("cliente", JSON.stringify(this.obj));
    window.location.href="./cliente";
  }
}
