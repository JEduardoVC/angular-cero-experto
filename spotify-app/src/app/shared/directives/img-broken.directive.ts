import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string = "";
  @HostListener('error') handlerError(): void {
    const elementNative = this.host.nativeElement;
    elementNative.src = this.customImg;
  }

  constructor(private host: ElementRef) {

  }

}
