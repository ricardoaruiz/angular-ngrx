import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EfetivacaoComponent } from './efetivacao.component';

describe('EfetivacaoComponent', () => {
  let component: EfetivacaoComponent;
  let fixture: ComponentFixture<EfetivacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EfetivacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EfetivacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
