import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutUsRoutingModule } from "src/app/pages/about-us/about-us-routing.module";



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AboutUsRoutingModule
],
  exports: [
    CommonModule, FooterComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
