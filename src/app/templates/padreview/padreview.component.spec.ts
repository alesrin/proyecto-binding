import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreviewComponent } from './padreview.component';

describe('PadreviewComponent', () => {
  let component: PadreviewComponent;
  let fixture: ComponentFixture<PadreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PadreviewComponent]
    });
    fixture = TestBed.createComponent(PadreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
