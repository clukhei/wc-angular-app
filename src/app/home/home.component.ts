import { Component, ElementRef, Input, SimpleChange, Type, ViewChild } from '@angular/core';
import { SgdsStepper } from 'clk-web-components';
import { AttributeComponent } from '../attribute/attribute.component';
import { AdDirective } from '../ad.directive';
import { AdItem } from '../ad-item';
import { EventsComponent } from '../events/events.component';
import { SlotComponent } from '../slot/slot.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild('stepper')
  stepper?: ElementRef<SgdsStepper>;
  ads: AdItem[] = [
    {
      stepHeader: 'Personal Details',
      component: AttributeComponent,
    },
    {
      stepHeader: 'Address and Contact Information',
      component: EventsComponent,
    },
    {
      stepHeader: 'Review',
      component: SlotComponent,
    },
  ];
 @Input() activeStep: number = 0;
  @ViewChild(AdDirective, { static: true }) adHost!: AdDirective;

  ngOnInit(): void {
    this.loadComponent();

  }

  ngOnChanges(changes: SimpleChange) {
    // changes.prop contains the old and the new value...
    this.loadComponent();
  }

  loadComponent() {
    const adItem = this.ads[this.activeStep];
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent(adItem.component);
  }
  component = null;
  updateActiveStep() {
    this.activeStep = this.stepper?.nativeElement.activeStep!
    this.loadComponent();

  }
  nextStep() {
    this.stepper?.nativeElement.nextStep();
    this.updateActiveStep()
  }
  prevStep() {
    this.stepper?.nativeElement.previousStep();
    this.updateActiveStep()
  }
  stepMetadata = [
    {
      stepHeader: 'Personal Details',
      component: AttributeComponent,
    },
    {
      stepHeader: 'Address and Contact Information',
      component: EventsComponent,
    },
    {
      stepHeader: 'Review',
      component: SlotComponent,
    },
  ];
}
