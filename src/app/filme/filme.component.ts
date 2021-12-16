import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/services/filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {
  filmes: Object[] = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.buscaFilmes().subscribe(filmes => this.filmes = filmes);
  }

}
