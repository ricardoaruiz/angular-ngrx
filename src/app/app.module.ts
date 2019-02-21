import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmacaoComponent } from './page/confirmacao/confirmacao.component';
import { DadosComponent } from './page/dados/dados.component';
import { EfetivacaoComponent } from './page/efetivacao/efetivacao.component';
import { pessoaReducer } from './state/pessoa/pessoa.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DadosComponent,
    ConfirmacaoComponent,
    EfetivacaoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ pessoa: pessoaReducer }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
