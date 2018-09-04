import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/responders/button/button.component';
import { CoordinateComponent } from './components/responders/coordinate/coordinate.component';
import { SoundComponent } from './components/stimuli/sound/sound.component';
import { MovieComponent } from './components/stimuli/movie/movie.component';
import { PictureComponent } from './components/stimuli/picture/picture.component';

import { StimuliDirective } from './stimuli.directive';

import { ResponseService } from './services/response/response.service';
import { RunnerService } from './services/runner/runner.service';
import { StimuliService } from './components/stimuli/stimuli.service';  // TODO extract this out! or find better directory structure
// todo perhaps this ^ is a signal that stimuli should become a module with its components, services AND directive bundled together

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CoordinateComponent,
    SoundComponent,
    MovieComponent,
    PictureComponent,
    StimuliDirective
  ],
  entryComponents: [
    PictureComponent,
    MovieComponent,
    SoundComponent,
    ButtonComponent,
    CoordinateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResponseService, RunnerService, StimuliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
