import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacaoComponent } from './estacao.component';

describe('EstacaoComponent', () => {
  let component: EstacaoComponent;
  let fixture: ComponentFixture<EstacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EstacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
