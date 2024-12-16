import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinijuegoHijoComponent } from './minijuego-hijo.component';

describe('MinijuegoHijoComponent', () => {
  let component: MinijuegoHijoComponent;
  let fixture: ComponentFixture<MinijuegoHijoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinijuegoHijoComponent]
    });
    fixture = TestBed.createComponent(MinijuegoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
