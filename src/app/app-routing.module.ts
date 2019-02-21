import { EfetivacaoComponent } from './page/efetivacao/efetivacao.component';
import { ConfirmacaoComponent } from './page/confirmacao/confirmacao.component';
import { DadosComponent } from './page/dados/dados.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dados',
    component: DadosComponent
  },
  {
    path: 'confirmacao',
    component: ConfirmacaoComponent
  },
  {
    path: 'efetivacao',
    component: EfetivacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
