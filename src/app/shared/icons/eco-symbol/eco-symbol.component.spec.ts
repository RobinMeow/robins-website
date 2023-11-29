import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoSymbolComponent } from './eco-symbol.component';

describe('EcoSymbolComponent', () => {
  let component: EcoSymbolComponent;
  let fixture: ComponentFixture<EcoSymbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcoSymbolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EcoSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
