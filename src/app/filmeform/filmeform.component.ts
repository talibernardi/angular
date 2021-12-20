import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FilmeService } from 'src/services/filme.service';


@Component({
  selector: 'app-filmeform',
  templateUrl: './filmeform.component.html',
  styleUrls: ['./filmeform.component.css']
})
export class FilmeformComponent implements OnInit {
  titulo = '' 
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>()

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
   
  }

  obtemFilmes() {
    this.filmeService.buscaFilmesPorTitulo(this.titulo).subscribe(filmes => {
      this.onSearch.emit(filmes);
    });
  }
}
