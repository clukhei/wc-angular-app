import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  @Output() newInputEvent = new EventEmitter<string>();

  handleInputChange(e: Event) {
    console.log('sgds-input', e)
  }

  handleSgdsFocus(e: Event){
    console.log("sgds focus", e)
  }
}
