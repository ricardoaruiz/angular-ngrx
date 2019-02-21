import { Action } from '@ngrx/store';

export abstract class GenericAction<T> implements Action {

  readonly type: string;
  readonly value: T;

  constructor(type: string, value?: T) {
    this.type = type;
    this.value = value;
  }

}
