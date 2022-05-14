import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './views/landing/landing.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ThemeService } from './services/theme.service';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedComponent } from './views/shared/shared.component';
import { SectionOneComponent } from './views/landing/section-one/section-one.component';
import { SectionTwoComponent } from './views/landing/section-two/section-two.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SectionThreeComponent } from './views/landing/section-three/section-three.component';
import { SectionFourComponent } from './views/landing/section-four/section-four.component';
import { SectionFiveComponent } from './views/landing/section-five/section-five.component';
import { TransService } from './services/trans.service';

export function HttpLoaderFactopry(http:HttpClient){
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    FooterComponent,
    SharedComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    CarouselModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ButtonModule,
    TranslateModule.forRoot({
      loader: {
        provide:TranslateLoader,
        useFactory:HttpLoaderFactopry,
        deps: [HttpClient]
      }
    })
  ],
  providers: [ThemeService,TransService],
  bootstrap: [AppComponent]
})
export class AppModule { }
