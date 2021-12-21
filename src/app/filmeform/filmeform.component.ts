import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Filme } from 'src/models/Filme';
import { FilmeService } from 'src/services/filme.service';

@Component({
  selector: 'app-filmeform',
  templateUrl: './filmeform.component.html',
  styleUrls: ['./filmeform.component.css']
})
export class FilmeformComponent implements OnInit {
  filme: Filme = {
    id: null,
    titulo: '',
    diretor: '',
    genero: '',
    duracao: 0,
  };

  constructor (
    private route: ActivatedRoute,
    private filmeService: FilmeService,
    private redir: Router
  ){ }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.filmeService.buscaFilmesPorId(params['id']).subscribe(filme => {
          this.filme = filme
        });
      }
    });
  }

  salvar() {
    this.filmeService.salvarFilme(this.filme).subscribe()
    alert('Filme salvo com sucesso!')
    this.redir.navigate(['/filme']);
  }
}
