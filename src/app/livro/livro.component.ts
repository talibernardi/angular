import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { LivroService } from '../../services/livro.service';


@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
  livros: any = [];
  @Output() respostaLivro = new EventEmitter();
  
  constructor(private livroService: LivroService,
    private redir: Router) { }

  ngOnInit(): void {
    this.livroService.buscaLivros().subscribe(livros => {
      this.livros = livros;
    });
    
  }
    
  
  respostalivro(livros: any) {
    console.log(livros)
    this.livros=livros
  }
  
  deletalivro(id:string){
    this.livroService.removeLivro(id).subscribe()
    this.redir.navigate(['/livro']);
  }
}
