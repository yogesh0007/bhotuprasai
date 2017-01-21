import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SignUpComponent }      from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { CSSCarouselImageComponent } from './landingPage/csscarouselimage.component';
import { DonationsComponent } from './donations/donations.component';
import { DataService } from './services/data.service';

const routing = RouterModule.forRoot([
    { path: '',      component: CSSCarouselImageComponent },
    { path: 'users',      component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'login', component: LoginComponent },
    { path: 'notes', component: NotesComponent },
    { path: 'donations', component: DonationsComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SignUpComponent,
    NotesComponent,
    CSSCarouselImageComponent,
    LoginComponent,
    DonationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [
    DataService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
