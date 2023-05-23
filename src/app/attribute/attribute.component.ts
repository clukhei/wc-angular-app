import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {

  email: string = ''
  
  handleInputChange(e: Event) {
    console.log('sgds-input', e)
    this.email = (e.target as HTMLInputElement).value
  }
  handleSgdsFocus(e: Event){
    console.log("sgds focus", e)

  }
}
