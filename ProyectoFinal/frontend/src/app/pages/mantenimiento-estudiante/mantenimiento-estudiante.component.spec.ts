import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoEstudianteComponent } from './mantenimiento-estudiante.component';

describe('MantenimientoEstudianteComponent', () => {
  let component: MantenimientoEstudianteComponent;
  let fixture: ComponentFixture<MantenimientoEstudianteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoEstudianteComponent]
    });
    fixture = TestBed.createComponent(MantenimientoEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
