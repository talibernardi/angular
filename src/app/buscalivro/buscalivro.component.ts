import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LivroService } from 'src/services/livro.service';


@Component({
  selector: 'app-buscalivro',
  templateUrl: './buscalivro.component.html',
  styleUrls: ['./buscalivro.component.css']
})
export class BuscaLivroComponent implements OnInit {
  titulo = '' 
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>()

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
   
  }

  obtemLivros() {
    this.livroService.buscaLivrosPorTitulo(this.titulo).subscribe(livros => {
      this.onSearch.emit(livros);

      
    });
  }
}
