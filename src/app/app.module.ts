import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FormsModule } from '@angular/forms';
import { FilmeComponent } from './filme/filme.component';
import { LivroComponent } from './livro/livro.component';
import { BuscaFilmeComponent } from './buscafilme/buscafilme.component';
import { FilmeformComponent } from './filmeform/filmeform.component';
import { LivroformComponent } from './livroform/livroform.component';
import { BuscaLivroComponent } from './buscalivro/buscalivro.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FilmeComponent,
    LivroComponent,
    BuscaFilmeComponent,
    FilmeformComponent,
    LivroformComponent,
    BuscaLivroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
