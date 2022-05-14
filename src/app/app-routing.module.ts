import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { LandingComponent } from './views/landing/landing.component';
import { SharedComponent } from './views/shared/shared.component';

const routes: Routes = [
  {path:"",component:SharedComponent},
  {path:"landing",component:HeaderComponent},
  {path:"footer",component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
