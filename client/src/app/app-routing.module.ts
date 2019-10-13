import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { GamingWallComponent } from './gaming-wall/gaming-wall.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { LoginhomeComponent} from './loginhome/loginhome.component';



const routes: Routes = [
  // {path: '', component:LoginhomeComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'gaming', component:GamingWallComponent},
  {path: 'form', component:FormComponent},
  {path: 'login', component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
