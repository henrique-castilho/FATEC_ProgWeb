package com.fatec.loja;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClienteController {
    @PostMapping("/api/cliente")
    public String gravar(@RequestBody Cliente obj){
        return "O cliente " + obj.getNome() + " foi salvo corretamente";
    }

    @PutMapping("/api/cliente")
    public String alterar(@RequestBody Cliente obj){
        return "O cliente " + obj.getNome() + " foi alterado corretamente";
    }

    @GetMapping("/api/cliente/{codigo}")
    public Cliente carregar(@PathVariable int codigo){
        Cliente obj = new Cliente(1, "maria",
        "maria@norton.net.br", "234234", 
        "2344-2344", "RG12312333", 
        "rua frei joao, 59","02344-234", 
        "são paulo","SP");
        return obj;
    }

    @DeleteMapping("/api/cliente/{codigo}")
    public String remover(@PathVariable int codigo) {
        return "Registro " + codigo + " removido com sucesso!";
    }

    @GetMapping("/api/clientes")
    public List<Cliente> listar(){
        return new ArrayList<Cliente>();
    }
}
