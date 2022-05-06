import { PortfolioService } from './service/portfolio/portfolio.service';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from './angular-material.module.ts';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { ScrollDownComponent } from './component/scroll-down/scroll-down/scroll-down.component';
import { PortfolioComponent } from './view/portfolio/portfolio.component';
import { PriceComponent } from './view/price/price.component';
import { ContactComponent } from './view/contact/contact.component';
import { BookingComponent } from './view/bookinkg/booking.component';
import { ActionsComponent } from './view/actions/actions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from '@angular/common/http';
import { SectionHeaderComponent } from './component/section-header/section-header/section-header.component';
import { CustomSectionComponent } from './component/section/custom-section/custom-section.component';
import { MainComponent } from './view/main/main/main.component';

const appRoutes : Routes = [
  {path:'', component:AppComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ScrollDownComponent,
    PortfolioComponent,
    PriceComponent,
    ContactComponent,
    BookingComponent,
    ActionsComponent,
    SectionHeaderComponent,
    CustomSectionComponent,
    MainComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularMaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
