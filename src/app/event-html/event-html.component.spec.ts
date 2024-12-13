import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventHtmlComponent } from './event-html.component';

describe('EventHtmlComponent', () => {
  let component: EventHtmlComponent;
  let fixture: ComponentFixture<EventHtmlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventHtmlComponent]
    });
    fixture = TestBed.createComponent(EventHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
