import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  first: Object[] = [];
  constructor(http:HttpClient) {
   http
   .get<Object[]>('http://localhost:5000/Filme')
   .subscribe(first => this.first = first);
   http
   .get<Object[]>('http://localhost:3333/Livro')
   .subscribe(first => this.first = first);

  }
  
  }



