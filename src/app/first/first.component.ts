import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  buscaFilmesLivros() {
    alert('dsdfds')
    //('http://localhost:3333/Livro')
    
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
