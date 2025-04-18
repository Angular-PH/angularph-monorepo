import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundingComponent } from './founding.component';

describe('FoundingComponent', () => {
  let component: FoundingComponent;
  let fixture: ComponentFixture<FoundingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoundingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
