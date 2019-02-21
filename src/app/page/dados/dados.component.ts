import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';

import { Pessoa } from '../../model/pessoa.model';
import { AdicionarPessoa } from './../../state/pessoa/pessoa.actions';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  form: FormGroup;

  constructor(
      private router: Router,
      private store: Store<{ pessoa: Pessoa }>,
      private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      'nome' : [''],
      'idade' : ['']
    });

    this.store.pipe(select('pessoa'))
      .pipe(take(1))
      .subscribe((pessoa: Pessoa) => {
        if (pessoa.nome) {
          this.form.setValue(pessoa);
        }
      });

  }

  enviar() {
    const pessoa: Pessoa = this.form.getRawValue();
    this.store.dispatch(new AdicionarPessoa(pessoa));
    this.router.navigate(['confirmacao']);
  }

}
