import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocaleSelectionComponent } from './locale-selection.component';

describe('LocaleSelectionComponent', () => {
  let component: LocaleSelectionComponent;
  let fixture: ComponentFixture<LocaleSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocaleSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocaleSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
