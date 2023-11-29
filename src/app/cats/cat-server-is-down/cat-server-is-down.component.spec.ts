import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatServerIsDownComponent } from './cat-server-is-down.component';

describe('CatServerIsDownComponent', () => {
  let component: CatServerIsDownComponent;
  let fixture: ComponentFixture<CatServerIsDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatServerIsDownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatServerIsDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
