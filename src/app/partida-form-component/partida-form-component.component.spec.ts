import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaFormComponentComponent } from './partida-form-component.component';

describe('PartidaFormComponentComponent', () => {
  let component: PartidaFormComponentComponent;
  let fixture: ComponentFixture<PartidaFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidaFormComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartidaFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
