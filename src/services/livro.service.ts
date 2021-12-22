import { Injectable } from '@angular/core';
import { NgLocalization } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Livro } from 'src/models/Livro';


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
  buscaLivrosPorTitulo(titulo: string): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.url + '/livro/titulo/' + titulo)
  }

  buscaLivrosPorId(id: string): Observable<Livro> {
    return this.http.get<Livro>(this.url + '/livro/' + id)
  }

  removeLivro(id: string): Observable<Livro[]> {
    return this.http.delete<Livro[]>(this.url + '/livro/' + id)
  }

  /*
   Se o id existir, insere se nao atualiza
  */
  salvarLivro(data: any): Observable<any> {
    return !data.id
      ? this.http.post(this.url + '/livro', data)
      : this.http.put(this.url + '/livro' + '/' + data.id, data);
  }
}

