import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor-game',
  templateUrl: './sponsor-game.component.html',
  styleUrls: ['./sponsor-game.component.css']
})
export class SponsorGameComponent implements OnInit {
Math:any
isActive: boolean = false;

//@ts-ignore
setActiveTile(event) {
  this.isActive = !this.isActive
}

  constructor() { 
    this.Math = Math;

  }

  ngOnInit() {
  }

}
