import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarActualizarPartidaForm } from './insertar-actualizar-partida';

describe('PartidaFormComponentComponent', () => {
  let component: InsertarActualizarPartidaForm;
  let fixture: ComponentFixture<InsertarActualizarPartidaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertarActualizarPartidaForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertarActualizarPartidaForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
