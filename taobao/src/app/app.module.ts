import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AlertModule} from "ngx-bootstrap";
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ProductService} from "./shared/product.service";
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { StarComponent } from './star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    ProductComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
