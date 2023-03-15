import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStepOneComponentComponent } from './components/forms/form-step-one-component/form-step-one-component.component';
import { FormStepTwoComponentComponent } from './components/forms/form-step-two-component/form-step-two-component.component';
import { FormStepThreeComponentComponent } from './components/forms/form-step-three-component/form-step-three-component.component';
import { FormStepFourComponentComponent } from './components/forms/form-step-four-component/form-step-four-component.component';

const routes: Routes = [
  {
    path: '', component: FormStepOneComponentComponent,
  },
  {
    path: 'step-2', component: FormStepTwoComponentComponent,
  },
  {
    path: 'step-3', component: FormStepThreeComponentComponent,
  },
  {
    path: 'step-4', component: FormStepFourComponentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
