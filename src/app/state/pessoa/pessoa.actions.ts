import { Pessoa } from '../../model/pessoa.model';
import { GenericAction } from '../generic-action';

export enum PessoaActionTypes {
  ADICIONAR = '[Pessoa] Adicionar',
  REMOVER = '[Pessoa] Remover',
  SELECIONAR = '[Pessoa] Selecionar'
}

export class AdicionarPessoa extends GenericAction<Pessoa> {
  constructor(pessoa: Pessoa) {
    super(PessoaActionTypes.ADICIONAR, pessoa);
  }
}

export class RemoverPessoa extends GenericAction<Pessoa> {
  constructor() {
    super(PessoaActionTypes.REMOVER);
  }
}

export class SelecionarPessoa extends GenericAction<Pessoa> {
  constructor() {
    super(PessoaActionTypes.SELECIONAR);
  }
}
