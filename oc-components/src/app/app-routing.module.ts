import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ListComponent } from './list/list.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { LocationsDragComponent } from './locations-drag/locations-drag.component';
import { TemplateViewComponent } from './template-view/template-view.component';
import { LocationsChecklistComponent } from './locations-checklist/locations-checklist.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'button-toggle', component: ButtonToggleComponent },
  { path: 'list', component: ListComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'template-list', component: TemplateListComponent },
  { path: 'locations-drag', component: LocationsDragComponent },
  { path: 'locations-checklist', component: LocationsChecklistComponent },
  { path: 'template', component: TemplateViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  
}
