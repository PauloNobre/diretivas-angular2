import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  private _hasView = false;

  @Input() set ngElse(condition: any) {
    if (!condition && !this._hasView) {
      this._hasView = true;
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    } else if (condition && this._hasView) {
      this._hasView = false;
      this._viewContainerRef.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<Object>,
    private _viewContainerRef: ViewContainerRef
  ) { }

}
