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
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/shared-components/login/login.component';
import { LogoutComponent } from './components/shared-components/logout/logout.component';
import { ProfileComponent } from './pages/protected-pages/profile-page/profile.component';
import { LandingComponent } from './pages/public-pages/landing-page/landing.component';
import { ConfiguratorPageComponent } from './pages/public-pages/configurator-page/configurator-page.component';
import { HeaderComponent } from './components/shared-components/header/header.component';
import { FooterComponent } from './components/shared-components/footer/footer.component';
import { RegisterComponent } from './components/shared-components/register/register.component';
import { ErrorPageComponent } from './pages/public-pages/error-page/error-page.component';
import { ShowcasePageComponent } from './pages/protected-pages/showcase-page/showcase-page.component';
import { GalleryComponent } from './components/landing-page-components/gallery/gallery.component';
import { CustomisationComponent } from './components/landing-page-components/customisation/customisation.component';
import { BackdropComponent } from './components/landing-page-components/backdrop/backdrop.component';
import { VolvoLogoComponent } from './components/shared-components/volvo-logo/volvo-logo.component';
import { FeaturesComponent } from './components/landing-page-components/features/features.component';
import { SpecificationsComponent } from './components/landing-page-components/specifications/specifications.component';

import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ExtColorComponent } from './components/configurator-page-components/ext-color/ext-color.component';

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
    ExtColorComponent,
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
    DropdownModule,
    ToastModule,
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
