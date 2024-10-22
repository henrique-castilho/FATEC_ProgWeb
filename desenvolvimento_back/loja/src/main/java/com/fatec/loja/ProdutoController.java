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
public class ProdutoController {
    @PostMapping("/api/produto")
    public String gravar(@RequestBody Produto obj) {
        return "O produto " + obj.getNome() + " foi salvo corretamente";
    }

    @PutMapping("/api/produto")
    public String alterar(@RequestBody Produto obj) {
        return "O produto " + obj.getNome() + " foi alterado corretamente";
    }

    @GetMapping("/api/produto/{codigo}")
    public Produto carregar(@PathVariable int codigo) {
        Produto obj = new Produto(1, "Martelo", "Martelo - Cabo de borracha", 35.50, 10, "Martelo");
        return obj;
    }

    @DeleteMapping("/api/produto/{codigo}")
    public String remover(@PathVariable int codigo) {
        return "Registro " + codigo + " removido com sucesso!";
    }

    @GetMapping("/api/produtos")
    public List<Produto>  listar() {
        return new ArrayList<Produto>();
    }
}
