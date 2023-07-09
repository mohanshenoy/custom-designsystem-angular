import { Component, HostBinding, Input } from '@angular/core';
import { UcBaseButton } from '../base-button/uc-base-button.component';

@Component({
  selector: 'button[uc-submit-button]',
  templateUrl: './uc-submit-button.component.html',
  styleUrls: ['./uc-submit-button.component.scss']
})
export class UcSubmitButton extends UcBaseButton{

  override label: string = "Submit";
  override class: string = "btn btn-success";
  override icon: string = "bi bi-check2";

  @HostBinding('class') override get classes(): string {
    //return 'btn btn-outline'; // custom style
    return this.class; //bootstrap style
  }

}
