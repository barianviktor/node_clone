import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.moduel';
import { LinkButtonComponent } from './components/link-button/link-button.component';

@NgModule({
  declarations: [HomeComponent, LinkButtonComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
