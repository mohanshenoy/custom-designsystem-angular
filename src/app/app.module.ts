import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UcSubmitButton } from './custom-ui-components/submit-button/uc-submit-button.component';
import { UcCancelButton } from './custom-ui-components/cancel-button/uc-cancel-button.component';
import { UcResetButton } from './custom-ui-components/reset-button/uc-reset-button.component';
import { UcBaseButton } from './custom-ui-components/base-button/uc-base-button.component';
import { UcDialogBox } from './custom-ui-components/dialog-box/uc-dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    UcBaseButton,
    UcSubmitButton,
    UcCancelButton,
    UcResetButton,
    UcDialogBox
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
