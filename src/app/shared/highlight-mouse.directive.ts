import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'yellow');
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onmouseleave() {
    // this._renderer.setElementStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  // @HostBinding('style.backgroundColor') backgroundColor: String;
  @HostBinding('style.backgroundColor') get setColor() {
    // código extra
    return this.backgroundColor;
  } 
  
  private backgroundColor: String;

  constructor(
    // private _elementRef: ElementRef,
    // private _renderer: Renderer
    ) { }

}
