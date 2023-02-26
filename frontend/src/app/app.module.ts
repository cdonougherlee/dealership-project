import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { LogoutComponent } from './components/shared/logout/logout.component';
import { ProfileComponent } from './pages/protected/profile/profile.component';
import { LandingComponent } from './pages/public/landing/landing.component';
import { ConfiguratorComponent } from './pages/public/configurator/configurator.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { ErrorComponent } from './pages/public/error/error.component';
import { ShowcaseComponent } from './pages/protected/showcase/showcase.component';
import { GalleryComponent } from './components/landing/gallery/gallery.component';

import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { FeaturesComponent } from './components/landing/features/features.component';
import { SpecificationsComponent } from './components/landing/specifications/specifications.component';
import { DataService } from './services/data.service';
import { ConfiguratorAnimationsComponent } from './components/landing/configurator-animations/configurator-animations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    LandingComponent,
    ConfiguratorComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ErrorComponent,
    ShowcaseComponent,
    GalleryComponent,
    FeaturesComponent,
    SpecificationsComponent,
    ConfiguratorAnimationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    LayoutModule,
    GalleriaModule,
    AccordionModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
  ],
  providers: [
    DataService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
