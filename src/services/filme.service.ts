import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgLocalization } from '@angular/common';
import { Observable } from 'rxjs';
import { Filme } from 'src/models/Filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  url: string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  buscaFilmes(): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.url + '/filme')
  }

  buscaFilmesPorTitulo(titulo: string): Observable<Filme[]> {
    return this.http.get<Filme[]>(this.url + '/filme/titulo/' + titulo)
  }

  buscaFilmesPorId(id: string): Observable<Filme> {
    return this.http.get<Filme>(this.url + '/filme/' + id)
  }

  removeFilme(id: string): Observable<Filme[]> {
    return this.http.delete<Filme[]>(this.url + '/filme/' + id)
  }

  /*
   Se o id existir, insere se nao atualiza
  */
  salvarFilme(data: any): Observable<any> {
    return !data.id
      ? this.http.post(this.url + '/filme', data)
      : this.http.put(this.url + '/filme' + '/' + data.id, data);
  }
}



