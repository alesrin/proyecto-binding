import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionMensajeComponent } from './confirmacion-mensaje.component';

describe('ConfirmacionMensajeComponent', () => {
  let component: ConfirmacionMensajeComponent;
  let fixture: ComponentFixture<ConfirmacionMensajeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmacionMensajeComponent]
    });
    fixture = TestBed.createComponent(ConfirmacionMensajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
