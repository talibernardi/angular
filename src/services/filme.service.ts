import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgLocalization } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  
  url: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  buscaFilmes() {   
    return this.http.get<Object[]>(this.url+'/Filme')
  }
  
  buscaFilmesPorTitulo(titulo:string) {
    return this.http.get<Object[]>(this.url+'/Filme/titulo/'+titulo)
  }

  removeFilme(id:string){
    return this.http.delete<Object[]>(this.url+'/Filme/'+id)
    
  }
  
}



