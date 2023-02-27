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
import { CarouselModule } from 'primeng/carousel';
import { ScrollTopModule } from 'primeng/scrolltop';
import { SidebarModule } from 'primeng/sidebar';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared/login/login.component';
import { LogoutComponent } from './components/shared/logout/logout.component';
import { ProfileComponent } from './pages/protected/profile-page/profile.component';
import { LandingComponent } from './pages/public/landing-page/landing.component';
import { ConfiguratorPageComponent } from './pages/public/configurator-page/configurator-page.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RegisterComponent } from './components/shared/register/register.component';
import { ErrorPageComponent } from './pages/public/error-page/error-page.component';
import { ShowcasePageComponent } from './pages/protected/showcase-page/showcase-page.component';
import { GalleryComponent } from './components/landing/gallery/gallery.component';
import { CustomisationComponent } from './components/landing/customisation/customisation.component';
import { BackdropComponent } from './components/landing/backdrop/backdrop.component';
import { VolvoLogoComponent } from './components/shared/volvo-logo/volvo-logo.component';
import { FeaturesComponent } from './components/landing/features/features.component';
import { SpecificationsComponent } from './components/landing/specifications/specifications.component';

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    ProfileComponent,
    LandingComponent,
    ConfiguratorPageComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    ErrorPageComponent,
    ShowcasePageComponent,
    GalleryComponent,
    FeaturesComponent,
    SpecificationsComponent,
    CustomisationComponent,
    BackdropComponent,
    VolvoLogoComponent,
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
    CarouselModule,
    ScrollTopModule,
    SidebarModule,
    InputTextModule,
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
