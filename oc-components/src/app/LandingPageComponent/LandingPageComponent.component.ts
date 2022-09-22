import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LandingPageComponent',
  templateUrl: './LandingPageComponent.component.html',
  styleUrls: ['./LandingPageComponent.component.css']
})
export class LandingPageComponentComponent implements OnInit {
  noBuilderPageForUrl: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
