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

import { AppComponent } from './app.component';

// Pages
import { ProfileComponent } from './pages/protected-pages/profile-page/profile.component';
import { LandingComponent } from './pages/public-pages/landing-page/landing.component';
import { ConfiguratorPageComponent } from './pages/public-pages/configurator-page/configurator-page.component';
import { ErrorPageComponent } from './pages/public-pages/error-page/error-page.component';
import { ShowcasePageComponent } from './pages/protected-pages/showcase-page/showcase-page.component';

// Shared components
import { LoginComponent } from './core/shared-components/login/login.component';
import { LogoutComponent } from './core/shared-components/logout/logout.component';
import { VolvoLogoComponent } from './core/shared-components/volvo-logo/volvo-logo.component';
import { HeaderComponent } from './core/shared-components/header/header.component';
import { FooterComponent } from './core/shared-components/footer/footer.component';
import { RegisterComponent } from './core/shared-components/register/register.component';
import { AccessoriesComponent } from './core/shared-components/accessories/accessories.component';
import { DealershipLocationsComponent } from './core/shared-components/dealership-locations/dealership-locations.component';

// Landing page components
import { GalleryComponent } from './pages/public-pages/landing-page/components/gallery/gallery.component';
import { CustomisationComponent } from './pages/public-pages/landing-page/components/customisation/customisation.component';
import { BackdropComponent } from './pages/public-pages/landing-page/components/backdrop/backdrop.component';
import { FeaturesComponent } from './pages/public-pages/landing-page/components//features/features.component';
import { SpecificationsComponent } from './pages/public-pages/landing-page/components/specifications/specifications.component';

// Configurator page components
import { ExtColourPickerComponent } from './pages/public-pages/configurator-page/components/ext-colour-picker/ext-colour-picker.component';
import { ExtThreeSixtyComponent } from './pages/public-pages/configurator-page/components/ext-three-sixty/ext-three-sixty.component';
import { IntTrimPickerComponent } from './pages/public-pages/configurator-page/components/int-trim-picker/int-trim-picker.component';
import { IntDisplayComponent } from './pages/public-pages/configurator-page/components/int-display/int-display.component';

// Profile page components
import { EditAccessoriesComponent } from './pages/protected-pages/profile-page/components/edit-accessories/edit-accessories.component';
import { DetailsComponent } from './pages/protected-pages/profile-page/components/details/details.component';
import { EditProfileComponent } from './pages/protected-pages/profile-page/components/edit-profile/edit-profile.component';
import { ListCarsComponent } from './pages/protected-pages/profile-page/components/list-cars/list-cars.component';

// Services
import { AuthService } from './core/services/auth.service';
import { DataService } from './core/services/data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

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
    ExtColourPickerComponent,
    ExtThreeSixtyComponent,
    IntTrimPickerComponent,
    IntDisplayComponent,
    AccessoriesComponent,
    EditAccessoriesComponent,
    DetailsComponent,
    EditProfileComponent,
    DealershipLocationsComponent,
    ListCarsComponent,
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
