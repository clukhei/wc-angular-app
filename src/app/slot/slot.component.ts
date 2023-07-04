import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent {
  url: string = ""
  constructor(private router: Router){
    console.log(this.router.url)
    this.url = this.router.url
  }
  @Output() newInputEvent = new EventEmitter<string>();

  handleToggle () {
    console.log('side effect action on toggle ')
  }
}
