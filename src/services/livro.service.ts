import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivroService {
  url: string = 'http://localhost:3333';

  constructor(private http: HttpClient) { 
   
  }
  buscaLivros() {   
    return this.http.get<Object[]>(this.url+'/Livro')
  }
}
