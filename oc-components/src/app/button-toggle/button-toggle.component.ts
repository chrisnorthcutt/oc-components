import { Component, OnInit } from '@angular/core';
import { BuilderBlock } from '@builder.io/angular';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})
export class ButtonToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

BuilderBlock({
  tag: 'app-button-toggle', // <-- use the component selector here
  name: 'Button Toggle',
  inputs: [

  ],
})(ButtonToggleComponent);
