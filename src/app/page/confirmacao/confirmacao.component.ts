import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { Pessoa } from '../../model/pessoa.model';
import { RemoverPessoa } from './../../state/pessoa/pessoa.actions';

@Component({
  selector: 'app-confirmacao',
  templateUrl: './confirmacao.component.html',
  styleUrls: ['./confirmacao.component.css']
})
export class ConfirmacaoComponent implements OnInit {

  pessoa: Pessoa;

  constructor(
        private router: Router,
        private store: Store<{ pessoa: Pessoa }>
      ) { }

  ngOnInit() {
    this.store.pipe(select('pessoa'))
      .pipe(take(1))
      .subscribe((pessoa: Pessoa) => {
          this.pessoa = pessoa;
      });
  }

  voltarLimpando() {
    this.store.dispatch(new RemoverPessoa());
    this.router.navigate(['dados']);
  }

  voltarSemLimpar() {
    this.router.navigate(['dados']);
  }

  efetivar() {
    this.router.navigate(['efetivacao']);
  }

}
