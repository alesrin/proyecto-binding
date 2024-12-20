import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinijuegoPadreComponent } from './minijuego-padre.component';

describe('MinijuegoPadreComponent', () => {
  let component: MinijuegoPadreComponent;
  let fixture: ComponentFixture<MinijuegoPadreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MinijuegoPadreComponent]
    });
    fixture = TestBed.createComponent(MinijuegoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
