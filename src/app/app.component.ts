import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-designsystem-angular';

  onClick(){
    alert("hello world !");
  }
  onClick1(){
    alert("my button is clicked using access key !");
  }

  onCancel(){
    alert("my cancel button is clicked !");
  }
  onSubmit(){
    alert("my submit button is clicked !");
  }
  onReset(){
    alert("my reset button is clicked !");
  }

  
  onDialogClose(){
    console.log("dialog close button is clicked");
  }
  onDialogCancel(){
    console.log("dialog cancel button is clicked");
  }
  onDialogSubmit1(){
    console.log("dialog submit button 1 is clicked");
  }
  onDialogSubmit2(){
    console.log("dialog submit button 2 is clicked");
  }

}
