import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FooterComponent } from './footer/footer.component';
import { GamingWallComponent } from './gaming-wall/gaming-wall.component';
import { FormComponent } from './form/form.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginhomeComponent } from './loginhome/loginhome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarsComponent } from './cars/cars.component';
import { AnimeComponent } from './anime/anime.component';
import { PaidComponent } from './paid/paid.component';
import { PatternComponent } from './pattern/pattern.component';
import { QuotesComponent } from './quotes/quotes.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    GalleryComponent,
    FooterComponent,
    GamingWallComponent,
    FormComponent,
    LoginComponent,
    CarsComponent,
    AnimeComponent,
    PaidComponent,
    PatternComponent,
    QuotesComponent,
    // BrowserModule, 
    // AppRoutingModule, 
    // NgbModule
    // LoginhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
