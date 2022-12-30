import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeComponent } from './_component/_home_page/home/home.component';
import { MainComponent } from './_component/_home_page/main/main.component';
import { ServiceComponent } from './_component/_home_page/service/service.component';
import { BookingComponent } from './_component/_home_page/booking/booking.component';
import { GalleryComponent } from './_component/_home_page/gallery/gallery.component';
import { ContactComponent } from './_component/_home_page/contact/contact.component';

import { LoginPageComponent } from './_component/_login_page/login-page/login-page.component';


import { ScrollDownComponent } from './_component/scroll-down/scroll-down.component';


const appRoutes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent }, 
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    BookingComponent,
    GalleryComponent,
    ContactComponent,
    ScrollDownComponent,
    MainComponent,
    LoginPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,

    NgbModule,
    FlexLayoutModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
