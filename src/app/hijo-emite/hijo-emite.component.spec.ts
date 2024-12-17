import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoEmiteComponent } from './hijo-emite.component';

describe('HijoEmiteComponent', () => {
  let component: HijoEmiteComponent;
  let fixture: ComponentFixture<HijoEmiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HijoEmiteComponent]
    });
    fixture = TestBed.createComponent(HijoEmiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
