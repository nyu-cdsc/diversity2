import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { Stimuli, Responsive } from '../stimuli';
import { Message } from '../../../message';
import { AreaComponent } from '../../responders/area/area.component';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'toku-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements Stimuli, Responsive, OnInit, AfterViewChecked {
  @Input() parameters: any;
  @Output() doneEvent = new EventEmitter<any>();
  @Output() responseEvent = new EventEmitter<Message>();
  @Input() responseEnabled = true; // this can be disabled by parent via [responseEnabled]
  @ViewChild(AreaComponent) areamap: AreaComponent;
  @ViewChild('theimage') theimage: ElementRef;
  value: null;

  constructor() { }
  ngOnInit() {

  }

  // defect with Angular. null safety check is broken for attribute assignment.
  // height would be set to 0 even if we did not have height in our parameters as
  // opposed to height defaulting to native image size, hence why we are setting
  // height and width here if there's something to set it to
  ngAfterViewChecked() {
    if (this.parameters.height) {
      this.theimage.nativeElement.height = this.parameters.height;
    }
    if (this.parameters.width) {
      this.theimage.nativeElement.width = this.parameters.width;
    }

    if ((this.value == null || this.value === 0) && innerWidth < 1920) {
      this.parameters.scalingFactor = this.getScalingFactor();
      this.value = this.parameters.naturalHeight;
    }
  }

  sendMessage(message: Message) {
    console.log('message received in pic! is', message);
    // todo Response val as in the one inside Params and choice made (perhaps change Response to Choice to make
    // it clear the level it's from)
    this.responseEvent.emit(message);
    this.done();
  }

  validate() {
    return true;
  }

  done() {
    this.doneEvent.emit(null);
  }

  getScalingFactor() {
    console.log('parameters width', this.parameters.coordinates.width, this.parameters.coordinates.naturalWidth);
    const width = this.parameters.width;
    const nwidth = this.parameters.naturalWidth;
    const height = this.parameters.height;
    const nheight = this.parameters.naturalHeight;
    console.log(width, height, nwidth, nheight);

    // TODO ^ make sure I didn't get width/nwidth flipped!
    // const scalingFactor = Math.min(width / nwidth, height / nheight);
    const scalingFactor = width / nwidth;
    console.log('factor ', scalingFactor);
    return scalingFactor;
  }
}
