import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeThanksComponent } from './like-thanks.component';

describe('LikeThanksComponent', () => {
  let component: LikeThanksComponent;
  let fixture: ComponentFixture<LikeThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeThanksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikeThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
