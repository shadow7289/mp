import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GamingWallComponent } from './gaming-wall/gaming-wall.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { LoginhomeComponent} from './loginhome/loginhome.component';
import { AnimeComponent } from './anime/anime.component';
import { CarsComponent } from './cars/cars.component';
import { PaidComponent } from './paid/paid.component';
import { CarouselComponent } from './carousel/carousel.component';
import { PatternComponent } from './pattern/pattern.component';
import { QuotesComponent } from './quotes/quotes.component';



const routes: Routes = [
  // {path: '', component:LoginhomeComponent},
  {path: '', component:CarouselComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'gaming-wall', component:GamingWallComponent},
  {path: 'form', component:FormComponent},
  {path: 'login', component:LoginComponent},
  {path: 'cars', component:CarsComponent},
  {path: 'anime',component:AnimeComponent},
  {path: 'paid', component:PaidComponent},
  {path: 'pat', component:PatternComponent},
  {path: 'quo', component:QuotesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
