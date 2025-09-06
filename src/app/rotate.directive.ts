import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[Rotate]',
  standalone: true,
})
export class RotateDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  @HostListener('click') onClick() {
    const rotateElement: HTMLElement = this.el.nativeElement.querySelector('i');
    this.renderer.setStyle(rotateElement, 'transform', `rotate(180deg)`);
  }
  @HostListener('blur') onBlur() {
    const rotateElement: HTMLElement = this.el.nativeElement.querySelector('i');
    this.renderer.setStyle(rotateElement, 'transform', `rotate(0deg)`);
  }

}
