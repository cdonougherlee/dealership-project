import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguratorComponent } from './pages/public/configurator/configurator.component';
import { DisplayComponent } from './pages/protected/display/display.component';
import { LandingComponent } from './pages/public/landing/landing.component';
import { ProfileComponent } from './pages/protected/profile/profile.component';
import { ErrorComponent } from './pages/public/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'configurator', component: ConfiguratorComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: 'display', component: DisplayComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
