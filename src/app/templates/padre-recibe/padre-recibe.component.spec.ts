import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreRecibeComponent } from './padre-recibe.component';

describe('PadreRecibeComponent', () => {
  let component: PadreRecibeComponent;
  let fixture: ComponentFixture<PadreRecibeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadreRecibeComponent]
    });
    fixture = TestBed.createComponent(PadreRecibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
