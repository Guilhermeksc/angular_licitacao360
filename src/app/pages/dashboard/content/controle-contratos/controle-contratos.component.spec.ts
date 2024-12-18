import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleContratosComponent } from './controle-contratos.component';

describe('ControleContratosComponent', () => {
  let component: ControleContratosComponent;
  let fixture: ComponentFixture<ControleContratosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControleContratosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControleContratosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
