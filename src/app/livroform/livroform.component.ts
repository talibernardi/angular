import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Livro } from 'src/models/Livro';
import { LivroService } from 'src/services/livro.service';



@Component({
  selector: 'app-livroform',
  templateUrl: './livroform.component.html',
  styleUrls: ['./livroform.component.css']
})
export class LivroformComponent implements OnInit {
  livro: Livro = {
    id: null,
    titulo: '',
    editora: '',
    genero: '',
    duracao: 0,
  };

  constructor (
    private route: ActivatedRoute,
    private livroService: LivroService,
    private redir: Router
  ){ }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.livroService.buscaLivrosPorId(params['id']).subscribe(livro => {
          this.livro = livro
        });
      }
    });
  }

  salvar() {
    this.livroService.salvarLivro(this.livro).subscribe()
    alert('Livro salvo com sucesso!')
    this.redir.navigate(['/livro']);
  }
}
