import { FirstComponent } from './first/first.component';
import {ThirdComponent } from './third/third.component';
import { FilmeComponent } from './filme/filme.component';
import { LivroComponent } from './livro/livro.component';



import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { BuscaFilmeComponent } from './buscafilme/buscafilme.component';
import { FilmeformComponent } from './filmeform/filmeform.component';
import { LivroformComponent } from './livroform/livroform.component';




const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'buscafilme', component: BuscaFilmeComponent },
  { path: 'filme', component: FilmeComponent },
  { path: 'filmeform', component: FilmeformComponent },
  { path: 'filmeform/:id', component: FilmeformComponent },
  { path: 'livroform', component: LivroformComponent },
  { path: 'livroform/:id', component: LivroformComponent },

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
