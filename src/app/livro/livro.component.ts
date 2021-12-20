import { Component, OnInit } from '@angular/core';
import { LivroService } from '../../services/livro.service';
@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
    livros: any = [];
    
    
    
  
    constructor(private livroService: LivroService) { }
    
  
    ngOnInit(): void {
      this.livroService.buscaLivros().subscribe(livros => {
        console.log(livros);
        this.livros = livros;
      });
    }
  
  }
