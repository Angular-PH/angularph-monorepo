import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousEventsComponent } from './previous-events.component';

describe('PreviousEventsComponent', () => {
  let component: PreviousEventsComponent;
  let fixture: ComponentFixture<PreviousEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
