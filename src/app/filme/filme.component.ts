import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FilmeService } from 'src/services/filme.service';



@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {
  filmes: any = [];
  @Output() respostaFilme = new EventEmitter();
  
  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.buscaFilmes().subscribe(filmes => {
      this.filmes = filmes;
      

    });
    
  }

  respostafilme(filmes: any) {
    console.log(filmes)
    this.filmes=filmes
  }
  deletafilme(id:string){
    this.filmeService.removeFilme(id)
    window.location.reload()


  }

}
