import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoKatakanaComponent } from './mantenimiento-katakana.component';

describe('MantenimientoKatakanaComponent', () => {
  let component: MantenimientoKatakanaComponent;
  let fixture: ComponentFixture<MantenimientoKatakanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoKatakanaComponent]
    });
    fixture = TestBed.createComponent(MantenimientoKatakanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
