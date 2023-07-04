import { Component, ElementRef, Input, SimpleChange, Type, ViewChild } from '@angular/core';
import { SgdsStepper } from 'clk-web-components';
import { AttributeComponent } from '../attribute/attribute.component';
import { StepperDirective } from '../stepper.directive';
import { StepperItem } from '../stepper-item';
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
  stepMetadata: StepperItem[] = [
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
  @ViewChild(StepperDirective, { static: true }) stepperComponentHost!: StepperDirective;

  ngOnInit(): void {
    this.loadComponent();
  }
  details = {
    email: "test",
  }

  loadComponent() {
    const stepComponent = this.stepMetadata[this.activeStep];
    const viewContainerRef = this.stepperComponentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(stepComponent.component);
    const component = (componentRef.instance as AttributeComponent)
    component.newInputEvent.subscribe(e=> this.details.email = e)
    component.email = this.details.email
  }
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
}
