import { FirstComponent } from './first/first.component';
import { LivroComponent } from './livro/livro.component';
import {ThirdComponent } from './third/third.component';
import { FilmeComponent } from './filme/filme.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { BuscaFilmeComponent } from './buscafilme/buscafilme.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'buscafilme', component: BuscaFilmeComponent },
  { path: 'filme', component: FilmeComponent },
  { path: 'livro', component: LivroComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.route = params['route'];
    });
  }
}
