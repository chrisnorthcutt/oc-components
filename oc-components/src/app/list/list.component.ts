import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
export interface PeriodicElement {
  property: string;
  tag: string;
  usage: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {property: 'Header', tag: 'mat-subheader', usage: "<div mat-subheader>My List</div>" },
  {property: 'Line', tag: 'mat-line', usage: "<div mat-line>New Line</div>" },
  {property: 'Avatar', tag: 'matListAvatar', usage: "<img matListAvatar src='...' alt='...'>" },
  
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  name: 'list' | undefined;
  displayedColumns: string[] = ['property', 'tag', 'usage'];
  dataSource = ELEMENT_DATA;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }
  constructor(  private route: ActivatedRoute,) { }


}
