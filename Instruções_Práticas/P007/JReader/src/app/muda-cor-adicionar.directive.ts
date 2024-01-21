import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMudaCorAdicionar]'
})
export class MudaCorAdicionarDirective {
  renderer: any;
  el: any;

  constructor(private elemento: ElementRef, private renderizador: Renderer2) { }
  
  @HostListener('click') onClick() {
    this.highlight();
  }

  private highlight() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'blue');
  }

}
