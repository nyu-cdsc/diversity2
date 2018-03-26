import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CorgiComponent } from './corgi.component';
import { VideoComponent } from './video/video.component';
import { AgeComponent } from './age/age.component';
import { StartPageComponent } from './start-page/start-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CorgiComponent,
    VideoComponent,
    AgeComponent,
    StartPageComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }