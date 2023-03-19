import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguratorPageComponent } from './pages/public-pages/configurator-page/configurator-page.component';
import { ProfileComponent } from './pages/protected-pages/profile-page/profile.component';
import { ErrorPageComponent } from './pages/public-pages/error-page/error-page.component';
import { LandingComponent } from './pages/public-pages/landing-page/landing.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'configurator', component: ConfiguratorPageComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
