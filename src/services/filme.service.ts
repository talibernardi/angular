import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  url: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  buscaFilmes() {   
    return this.http.get<Object[]>(this.url+'/Filme')
  }
}
