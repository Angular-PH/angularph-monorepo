import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinourfbComponent } from './join-our-fb.component';

describe('JoinourfbComponent', () => {
  let component: JoinourfbComponent;
  let fixture: ComponentFixture<JoinourfbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinourfbComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinourfbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
