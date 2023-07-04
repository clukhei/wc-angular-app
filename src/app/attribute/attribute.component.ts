import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {
 

 @Input() email = ""
 @Output() newInputEvent = new EventEmitter<string>();

 handleInputChange(e: Event) {
  this.newInputEvent.emit((e.target as HTMLInputElement).value);
}
 
  // handleInputChange(e: Event) {
  //   console.log('sgds-input', e)
  //   this.email = (e.target as HTMLInputElement).value
  // }
  handleSgdsFocus(e: Event){
    console.log("sgds focus", e)

  }
}
