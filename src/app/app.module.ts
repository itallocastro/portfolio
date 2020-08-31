import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { BodyPartOneComponent } from './dashboard/body-part-one/body-part-one.component';
import { BodyPartTwoComponent } from './dashboard/body-part-two/body-part-two.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { MeusTrabalhosComponent } from './dashboard/meus-trabalhos/meus-trabalhos.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    BodyPartOneComponent,
    BodyPartTwoComponent,
    MeusTrabalhosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
