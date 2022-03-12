import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AvatarLibModule } from 'projects/avatar-lib/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
