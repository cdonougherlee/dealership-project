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
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';

// Pages
import { ProfileComponent } from './pages/protected-pages/profile-page/profile.component';
import { LandingComponent } from './pages/public-pages/landing-page/landing.component';
import { ConfiguratorPageComponent } from './pages/public-pages/configurator-page/configurator-page.component';
import { ErrorPageComponent } from './pages/public-pages/error-page/error-page.component';

// Shared components
import { LoginComponent } from './core/shared-components/login/login.component';
import { LogoutComponent } from './core/shared-components/logout/logout.component';
import { VolvoLogoComponent } from './core/shared-components/volvo-logo/volvo-logo.component';
import { HeaderComponent } from './core/shared-components/header/header.component';
import { FooterComponent } from './core/shared-components/footer/footer.component';
import { RegisterComponent } from './core/shared-components/register/register.component';
import { AccessoriesComponent } from './core/shared-components/accessories/accessories.component';
import { DealershipLocationsComponent } from './core/shared-components/dealership-locations/dealership-locations.component';
import { ExtColourPickerComponent } from './core/shared-components/ext-colour-picker/ext-colour-picker.component';
import { ExtThreeSixtyComponent } from './core/shared-components/ext-three-sixty/ext-three-sixty.component';

// Landing page components
import { GalleryComponent } from './pages/public-pages/landing-page/components/gallery/gallery.component';
import { CustomisationComponent } from './pages/public-pages/landing-page/components/customisation/customisation.component';
import { BackdropComponent } from './pages/public-pages/landing-page/components/backdrop/backdrop.component';
import { FeaturesComponent } from './pages/public-pages/landing-page/components//features/features.component';
import { SpecificationsComponent } from './pages/public-pages/landing-page/components/specifications/specifications.component';

// Configurator page components
import { IntTrimPickerComponent } from './core/shared-components/int-trim-picker/int-trim-picker.component';
import { TrimDisplayComponent } from './core/shared-components/trim-display/trim-display.component';

// Profile page components
import { EditAccessoriesComponent } from './pages/protected-pages/profile-page/components/edit-accessories/edit-accessories.component';
import { DetailsComponent } from './pages/protected-pages/profile-page/components/details/details.component';
import { EditProfileComponent } from './pages/protected-pages/profile-page/components/edit-profile/edit-profile.component';
import { SavedCarsComponent } from './pages/protected-pages/profile-page/components/saved-cars/saved-cars.component';

// Services
import { AuthService } from './core/services/auth.service';
import { DataService } from './core/services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { EditExteriorComponent } from './pages/protected-pages/profile-page/components/edit-exterior/edit-exterior.component';
import { EditTrimComponent } from './pages/protected-pages/profile-page/components/edit-trim/edit-trim.component';
import { DisplayCarComponent } from './pages/protected-pages/profile-page/components/display-car/display-car.component';

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
    GalleryComponent,
    FeaturesComponent,
    SpecificationsComponent,
    CustomisationComponent,
    BackdropComponent,
    VolvoLogoComponent,
    ExtColourPickerComponent,
    ExtThreeSixtyComponent,
    IntTrimPickerComponent,
    TrimDisplayComponent,
    AccessoriesComponent,
    EditAccessoriesComponent,
    DetailsComponent,
    EditProfileComponent,
    DealershipLocationsComponent,
    SavedCarsComponent,
    EditExteriorComponent,
    EditTrimComponent,
    DisplayCarComponent,
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
    DialogModule,
    CardModule,
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