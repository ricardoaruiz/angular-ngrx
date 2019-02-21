import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { Pessoa } from '../../model/pessoa.model';
import { RemoverPessoa } from '../../state/pessoa/pessoa.actions';

@Component({
  selector: 'app-efetivacao',
  templateUrl: './efetivacao.component.html',
  styleUrls: ['./efetivacao.component.css']
})
export class EfetivacaoComponent implements OnInit {

  pessoa: Pessoa;

  constructor(
        private store: Store<{ pessoa: Pessoa }>,
        private router: Router
      ) { }

  ngOnInit() {
    this.store.pipe(select('pessoa'))
      .pipe(take(1))
      .subscribe( (pessoa: Pessoa) => {
        this.pessoa = pessoa;
      });
  }

  voltarDados() {
    this.store.dispatch(new RemoverPessoa());
    this.router.navigate(['dados']);
  }

}
