import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoviewComponent } from './hijoview.component';

describe('HijoviewComponent', () => {
  let component: HijoviewComponent;
  let fixture: ComponentFixture<HijoviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HijoviewComponent]
    });
    fixture = TestBed.createComponent(HijoviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
