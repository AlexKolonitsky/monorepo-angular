import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: '../../projects/auth-example/src/app/app.module-export#AppAuthModule'
  },
  {
    path: 'project-plan',
    loadChildren: '../../projects/project-plan-example/src/app/app.module-export#AppProjectPlanModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
