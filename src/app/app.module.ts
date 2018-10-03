import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/responders/button/button.component';
import { AreaComponent } from './components/responders/area/area.component';
import { SoundComponent } from './components/stimuli/sound/sound.component';
import { MovieComponent } from './components/stimuli/movie/movie.component';
import { PictureComponent } from './components/stimuli/picture/picture.component';

import { StimuliDirective } from './stimuli.directive';

import { ResponseService } from './services/response/response.service';
import { RunnerService } from './services/runner/runner.service';
import { StimuliService } from './components/stimuli/stimuli.service';
import { FormComponent } from './components/stimuli/form/form.component';  // TODO extract this out! or find better directory structure
// todo perhaps this ^ is a signal that stimuli should become a module with its components, services AND directive bundled together

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AreaComponent,
    SoundComponent,
    MovieComponent,
    PictureComponent,
    StimuliDirective,
    FormComponent
  ],
  entryComponents: [
    PictureComponent,
    MovieComponent,
    SoundComponent,
    ButtonComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResponseService, RunnerService, StimuliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
