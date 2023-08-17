import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeaderComponent } from './components/header/header/header.component';
import { MainNavComponent } from './components/header/main-nav/main-nav.component';
import { FormComponent } from './components/pages/form/form.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TestComponent } from './components/pages/test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavComponent,
    FormComponent,
    HomeComponent,
    TestComponent,
  ],
  imports: [    
    BrowserModule.withServerTransition({ appId: 'ng14ssr' }),
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
