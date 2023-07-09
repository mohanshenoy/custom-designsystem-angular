import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'button[uc-base-button]',
  templateUrl: './uc-base-button.component.html',
  styleUrls: ['./uc-base-button.component.scss']
})
export class UcBaseButton {

  @Input() label: string = "uc label";
  @Input() class: string = "btn btn-primary";
  @Input() icon: string = "bi bi-x";

  @HostBinding('class') get classes(): string {
    return this.class; // for bootstrap style
    //'btn btn-outline' for custom style
  }

}
