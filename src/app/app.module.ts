import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
