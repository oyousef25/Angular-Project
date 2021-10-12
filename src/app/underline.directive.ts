import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

  @Input() changeType?: string;

  constructor(private elm: ElementRef) {
  }

  @HostListener('mouseover') onMouseOver() {
    if (this.changeType == "underlineTitle"){
      //Add the code to add a line under the title
      this.underlineText(true);

    }else if (this.changeType == "boldTags"){
      //Add the code to add a bold the tag
      this.boldText(true);
    }
  }

  @HostListener('mouseout') onMouseOut() {
    if (this.changeType == "underlineTitle"){
      //Add the code to add a line under the title
      this.underlineText(false);

    }else if (this.changeType == "boldTags"){
      //Add the code to add a bold the tag
      this.boldText(false);
    }
  }

  /*
    Underline the title
   */
  underlineText(underline: boolean):void{
    if (underline){
      this.elm.nativeElement.style.textDecoration = "underline";
    }else{
      this.elm.nativeElement.style.textDecoration = "none";
    }
  }

  /*
    Bold the tag
   */
  boldText(boldText: boolean):void{
    if (boldText){
      this.elm.nativeElement.style.fontWeight = "bold";
    }else{
      this.elm.nativeElement.style.fontWeight = "normal";
    }
  }
}
