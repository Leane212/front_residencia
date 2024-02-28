import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMudaCorVeiculos]'
})
export class MudaCorVeiculosDirective {

  constructor(private elemento: ElementRef, private renderizador: Renderer2) { }
  @HostListener('mouseenter') onMouseEnter(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'yellow');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'white');
  }
  @HostListener('mouseleave') onMouseLeave(evento: Event){
    this.renderizador.setStyle(this.elemento.nativeElement, 'background-color', 'blue');
    this.renderizador.setStyle(this.elemento.nativeElement, 'color', 'white');
  }

}
