import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoHiraganaComponent } from './mantenimiento-hiragana.component';

describe('MantenimientoHiraganaComponent', () => {
  let component: MantenimientoHiraganaComponent;
  let fixture: ComponentFixture<MantenimientoHiraganaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoHiraganaComponent]
    });
    fixture = TestBed.createComponent(MantenimientoHiraganaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
