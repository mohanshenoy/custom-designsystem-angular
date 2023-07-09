import { Component, HostBinding, Input } from '@angular/core';
import { UcBaseButton } from '../base-button/uc-base-button.component';

@Component({
  selector: 'button[uc-cancel-button]',
  templateUrl: './uc-cancel-button.component.html',
  styleUrls: ['./uc-cancel-button.component.scss']
})
export class UcCancelButton extends UcBaseButton{

  override label: string = "Cancel";
  override class: string = "btn btn-danger";
  override icon: string = "bi bi-x";
  
  @HostBinding('class') override get classes(): string {
    //return 'btn btn-outline'; // custom style
    return this.class; //bootstrap style
  }

}
