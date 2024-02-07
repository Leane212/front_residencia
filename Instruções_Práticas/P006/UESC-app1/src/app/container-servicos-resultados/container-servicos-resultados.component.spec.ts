import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerServicosResultadosComponent } from './container-servicos-resultados.component';

describe('ContainerServicosResultadosComponent', () => {
  let component: ContainerServicosResultadosComponent;
  let fixture: ComponentFixture<ContainerServicosResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContainerServicosResultadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerServicosResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
