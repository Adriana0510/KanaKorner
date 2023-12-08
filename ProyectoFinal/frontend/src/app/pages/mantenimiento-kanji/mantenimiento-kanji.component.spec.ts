import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoKanjiComponent } from './mantenimiento-kanji.component';

describe('MantenimientoKanjiComponent', () => {
  let component: MantenimientoKanjiComponent;
  let fixture: ComponentFixture<MantenimientoKanjiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantenimientoKanjiComponent]
    });
    fixture = TestBed.createComponent(MantenimientoKanjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
