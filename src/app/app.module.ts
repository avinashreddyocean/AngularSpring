import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Footer } from './footer.component.html/footer.component.html.component';
 import { FooterComponent } from '../app/user/shared/layout/footer/footer.component';
 import { HeaderComponent } from '../app/user/shared/layout/header/header.component'  
//import { LayoutComponent } from './src/app/user/shared/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    UserModule,
    BrowserAnimationsModule,
    // FooterComponent,
    // HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//export class PizzaPartyAppModule { }

