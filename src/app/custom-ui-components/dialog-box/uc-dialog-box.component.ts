import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'uc-dialog-box',
  templateUrl: './uc-dialog-box.component.html',
  styleUrls: ['./uc-dialog-box.component.scss']
})
export class UcDialogBox {

  @Input() ucId:string = "ucId";
  @Input() title: string = "uc title";
  @Input() body: string = "uc body";
  @Input() icon:string = "";
  @Input() cancelLabel:string  = "uc cancel";
  @Input() confirmLabel:string ="uc confirm";
  @Output() submitEvent = new EventEmitter();
  
  // @HostBinding('class') get classes(): string {
  //   //return 'btn btn-outline'; // custom style
  //   return 'btn btn-success'; //bootstrap style
  // }

  __onDialogSubmit(){
    alert("dialog submit button is clicked");
    this.submitEvent.emit();
  }


}
