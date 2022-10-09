import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { GovernanceComponent } from './features/governance/governance.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeAboutComponent } from './features/home-about/home-about.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: HomeAboutComponent,
      },
      {
        path: 'governance',
        component: GovernanceComponent,
      },
      {
        path: '**',
        redirectTo: '',
      },
    ],
  },
];
@NgModule({
  declarations: [AboutComponent, GovernanceComponent, HomeAboutComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AboutModule {}
