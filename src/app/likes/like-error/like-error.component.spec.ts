import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeErrorComponent } from './like-error.component';

describe('LikeErrorComponent', () => {
  let component: LikeErrorComponent;
  let fixture: ComponentFixture<LikeErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikeErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
