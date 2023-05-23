import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  handleInputChange(e: Event) {
    console.log('sgds-input', e)
  }

  handleSgdsFocus(e: Event){
    console.log("sgds focus", e)
  }
}
