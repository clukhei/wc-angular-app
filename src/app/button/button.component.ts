import { Component, ElementRef, ViewChild } from '@angular/core';

import { SgdsAlert } from '@govtechsg/sgds-web-component'
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @ViewChild('alert')
  alert? : ElementRef<SgdsAlert>

  openAlert(){
    alert('Button clicked')
  }
  focusAlert(i: FocusEvent){
    console.log(i)
  }

  hideAlert() {
    // this.alert?.nativeElement.handleCloseClick()
    this.alertShowState = true
    this.buttonText = "Hide Alert"
  }

  alertShowState?: boolean = false

  buttonText: string = "Show Alert"
  
}
