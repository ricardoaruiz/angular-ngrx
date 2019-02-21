import { Pessoa } from '../../model/pessoa.model';
import { GenericAction } from '../generic-action';
import { PessoaActionTypes } from './pessoa.actions';

export const estadoInicial = {} as Pessoa;

export function pessoaReducer(state: Pessoa = estadoInicial, action: GenericAction<Pessoa>) {
  switch (action.type) {
    case PessoaActionTypes.ADICIONAR:
      state = action.value;
      return state;
    case PessoaActionTypes.REMOVER:
      state = estadoInicial;
      return state;
    case PessoaActionTypes.SELECIONAR:
      return state;
    default:
      return state;
  }
}
