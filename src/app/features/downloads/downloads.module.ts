import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadsComponent } from './downloads.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DownloadsComponent,
  },
];

@NgModule({
  declarations: [DownloadsComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class DownloadsModule {}
