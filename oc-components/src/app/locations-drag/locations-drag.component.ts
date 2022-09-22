import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-locations-drag',
  templateUrl: './locations-drag.component.html',
  styleUrls: ['./locations-drag.component.scss'],
})
export class LocationsDragComponent implements OnInit {
  //@ts-ignore
  @ViewChild(MatAccordion) accordion: MatAccordion;
  locations = [
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    'Indianapolis',
    'Noblesville',
    'Fishers',
    'Carmel',
    
  ];

  west = [''];
  east = [''];
  index = this.west.indexOf('Drag and Drop Location');
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      if (event.container.data[0] === '') {
        event.container.data.pop()
      }
      
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
