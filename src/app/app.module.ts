import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { StepComponentComponent } from './components/step-component/step-component.component';
import { FormComponentComponent } from './components/forms/form-component/form-component.component';
import { FormStepOneComponentComponent } from './components/forms/form-step-one-component/form-step-one-component.component';
import { FormStepTwoComponentComponent } from './components/forms/form-step-two-component/form-step-two-component.component';
import { FormStepThreeComponentComponent } from './components/forms/form-step-three-component/form-step-three-component.component';
import { FormStepFourComponentComponent } from './components/forms/form-step-four-component/form-step-four-component.component';
import { CardPlanComponentComponent } from './components/card-plan-component/card-plan-component.component';
import { AddOnsComponentComponent } from './components/add-ons-component/add-ons-component.component';
import { FormsModule } from '@angular/forms';
import { SidebarMobileComponentComponent } from './components/sidebar-mobile-component/sidebar-mobile-component.component';
import { FormMobileComponentComponent } from './components/forms/form-mobile-component/form-mobile-component.component';
import { CardPlanMobileComponentComponent } from './components/card-plan-mobile-component/card-plan-mobile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponentComponent,
    StepComponentComponent,
    FormComponentComponent,
    FormStepOneComponentComponent,
    FormStepTwoComponentComponent,
    FormStepThreeComponentComponent,
    FormStepFourComponentComponent,
    CardPlanComponentComponent,
    AddOnsComponentComponent,
    SidebarMobileComponentComponent,
    FormMobileComponentComponent,
    CardPlanMobileComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
