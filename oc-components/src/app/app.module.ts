import { NgModule } from '@angular/core';
import { DemoMaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialExampleModule } from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponent } from './button/button.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ListComponent } from './list/list.component';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TemplateListComponent } from './template-list/template-list.component';
import { LocationsDragComponent } from './locations-drag/locations-drag.component';
import { LocationsChecklistComponent } from './locations-checklist/locations-checklist.component';
import { TemplateViewComponent } from './template-view/template-view.component';
import { MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS } from '@angular/material/slide-toggle';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NewTemplateDialogComponent } from './template-list/template-list.component';
import { LandingPageComponentComponent } from './LandingPageComponent/LandingPageComponent.component';
import { BuilderModule } from '@builder.io/angular'; // <-- import here
import { RouterModule } from '@angular/router';
import { EventOnboardingComponent } from './event-onboarding/event-onboarding.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SponsorGameComponent } from './sponsor-game/sponsor-game.component';

@NgModule({
  declarations: [			
    AppComponent,
    ButtonComponent,
    ButtonToggleComponent,
    ListComponent,
    CheckboxComponent,
    TemplateListComponent,
    LocationsDragComponent,
    LocationsChecklistComponent,
    TemplateViewComponent,
    NewTemplateDialogComponent,
      LandingPageComponentComponent,
      EventOnboardingComponent,
      SponsorGameComponent
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FlexLayoutModule,
    FormsModule,
    BuilderModule.forRoot('98cb8c6b330e4f0993366be8842ed9da'),
    RouterModule.forRoot([
      {
        path: '**',
        component: LandingPageComponentComponent, // <-- add LandingPageComponent here
      },
    ]),
  ],
  providers: [
    {
      provide: MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS,
      useValue: { color: 'accent' },
    },

    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
