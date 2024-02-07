import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerMenuNoticiasDestaquesComponent } from './container-menu-noticias-destaques.component';

describe('ContainerMenuNoticiasDestaquesComponent', () => {
  let component: ContainerMenuNoticiasDestaquesComponent;
  let fixture: ComponentFixture<ContainerMenuNoticiasDestaquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerMenuNoticiasDestaquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerMenuNoticiasDestaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
