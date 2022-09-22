import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';

export interface Templates {
  name: string;
  access: string;
  lastModified: string;
}

const ELEMENT_DATA: Templates[] = [
  {
    name: 'Q2 2022 Golf Outing',
    access: 'All Regions',
    lastModified: '08/03/2022',
  },
  {
    name: 'Spring Gala',
    access: 'Midwest, Southwest',
    lastModified: '07/23/2022',
  },
  {
    name: 'Fall 2022 Template',
    access: 'All Regions',
    lastModified: '07/14/2022',
  },
];

const ARCHIVED_DATA: Templates[] = [
  {
    name: 'Q1 2021 Golf Outing',
    access: 'All Regions',
    lastModified: '08/03/2022',
  },
  {
    name: 'Fall Gala',
    access: 'Midwest, Southwest',
    lastModified: '07/23/2022',
  },
  {
    name: 'Fall 2020 Template',
    access: 'All Regions',
    lastModified: '07/14/2022',
  },
  {
    name: 'Q1 2021 Golf Outing',
    access: 'All Regions',
    lastModified: '08/03/2022',
  },
  {
    name: 'Fall Gala',
    access: 'Midwest, Southwest',
    lastModified: '07/23/2022',
  },
  {
    name: 'Fall 2020 Template',
    access: 'All Regions',
    lastModified: '07/14/2022',
  },
  {
    name: 'Q1 2021 Golf Outing',
    access: 'All Regions',
    lastModified: '08/03/2022',
  },
  {
    name: 'Fall Gala',
    access: 'Midwest, Southwest',
    lastModified: '07/23/2022',
  },
  {
    name: 'Fall 2020 Template',
    access: 'All Regions',
    lastModified: '07/14/2022',
  },
  {
    name: 'Q1 2021 Golf Outing',
    access: 'All Regions',
    lastModified: '08/03/2022',
  },
  {
    name: 'Fall Gala',
    access: 'Midwest, Southwest',
    lastModified: '07/23/2022',
  },
  {
    name: 'Fall 2020 Template',
    access: 'All Regions',
    lastModified: '07/14/2022',
  },
  {
    name: 'Q1 2021 Golf Outing',
    access: 'All Regions',
    lastModified: '08/03/2022',
  },
  {
    name: 'Fall Gala',
    access: 'Midwest, Southwest',
    lastModified: '07/23/2022',
  },
  {
    name: 'Fall 2020 Template',
    access: 'All Regions',
    lastModified: '07/14/2022',
  },
  {
    name: 'Q1 2021 Golf Outing',
    access: 'All Regions',
    lastModified: '08/03/2022',
  },
  {
    name: 'Fall Gala',
    access: 'Midwest, Southwest',
    lastModified: '07/23/2022',
  },
  {
    name: 'Fall 2020 Template',
    access: 'All Regions',
    lastModified: '07/14/2022',
  },
];

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'access', 'lastModified', 'star'];
  archivedColumns: string[] = ['select','name','lastModified', 'star'];
  dataSource = new MatTableDataSource<Templates>(ELEMENT_DATA);
  archivedTemplates = new MatTableDataSource<Templates>(ARCHIVED_DATA);
  selection = new SelectionModel<Templates>(true, [])
  //@ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

 
  openDialog(): void {
    const dialogRef = this.dialog.open(NewTemplateDialogComponent, {
      width: '900px',
    });
  }

  ngAfterViewInit() {
    this.archivedTemplates.paginator = this.paginator;
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.archivedTemplates.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.archivedTemplates.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Templates): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.name + 1}`;
  }
  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    
  }

}

@Component({
  selector: 'new-template-dialog',
  templateUrl: './new-template-dialog.component.html',
  styleUrls: ['./new-template-dialog.component.scss']
})

export class NewTemplateDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<NewTemplateDialogComponent>,
  ) {}
}
