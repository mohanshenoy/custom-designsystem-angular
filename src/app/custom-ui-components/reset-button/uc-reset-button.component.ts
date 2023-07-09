import { Component, HostBinding, Input } from '@angular/core';
import { UcBaseButton } from '../base-button/uc-base-button.component';

@Component({
  selector: 'button[uc-reset-button]',
  templateUrl: './uc-reset-button.component.html',
  styleUrls: ['./uc-reset-button.component.scss']
})
export class UcResetButton extends UcBaseButton{

  override label: string = "Reset";
  override class: string = "btn btn-warning";
  override icon: string = "bi bi-x-diamond";

  @HostBinding('class') override get classes(): string {
    //return 'btn btn-outline'; // custom style
    return this.class; //bootstrap style
  }

}
