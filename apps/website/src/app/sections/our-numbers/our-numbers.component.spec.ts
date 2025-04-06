import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurnumbersComponent } from './our-numbers.component';

describe('OurnumbersComponent', () => {
  let component: OurnumbersComponent;
  let fixture: ComponentFixture<OurnumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurnumbersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurnumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
