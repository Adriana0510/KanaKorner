import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDeSecionComponent } from './inicio-de-secion.component';

describe('InicioDeSecionComponent', () => {
  let component: InicioDeSecionComponent;
  let fixture: ComponentFixture<InicioDeSecionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioDeSecionComponent]
    });
    fixture = TestBed.createComponent(InicioDeSecionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
