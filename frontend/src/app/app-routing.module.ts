import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguratorPageComponent } from './pages/public/configurator-page/configurator-page.component';
import { ShowcasePageComponent } from './pages/protected/showcase-page/showcase-page.component';
import { ProfileComponent } from './pages/protected/profile-page/profile.component';
import { ErrorPageComponent } from './pages/public/error-page/error-page.component';
import { LandingComponent } from './pages/public/landing-page/landing.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'configurator', component: ConfiguratorPageComponent },
  { path: 'profile/:username', component: ProfileComponent },
  { path: ':username/car/:index', component: ShowcasePageComponent },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
