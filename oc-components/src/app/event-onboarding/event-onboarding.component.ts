import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-event-onboarding',
  templateUrl: './event-onboarding.component.html',
  styleUrls: ['./event-onboarding.component.css']
})
export class EventOnboardingComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

}
