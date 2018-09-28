import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, AfterContentInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { Stimuli, Responsive } from '../stimuli';
import { Message } from '../../../message';
import { AreaComponent } from '../../responders/area/area.component';

@Component({
  selector: 'app-picture',
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
  // sf = 0.86;

  constructor() { }
  ngOnInit() { }
  ngAfterViewChecked() {
    this.areamap.scalingFactor = this.getScalingFactor();
  }

  sendMessage(message: Message) {
    console.log('message received in pic! is', message);
    // todo Response val as in the one inside Params and choice made (perhaps change Response to Choice to make it clear the level it's from)
    this.responseEvent.emit(message);
    // todo support multiple reponses in future
    this.done();
  }

  validate() {
    return true;
  }

  done() {
    this.doneEvent.emit(null);
  }

  getScalingFactor() {
    const width = this.theimage.nativeElement.width;
    const nwidth = this.theimage.nativeElement.naturalWidth;
    const height = this.theimage.nativeElement.height;
    const nheight = this.theimage.nativeElement.naturalHeight;
    console.log(width, height, nwidth, nheight);

    // TODO ^ make sure I didn't get width/nwidth flipped!
    // const scalingFactor = Math.min(width / nwidth, height / nheight);
    const scalingFactor = width / nwidth;
    console.log('factor ', scalingFactor);
    return scalingFactor;
  }
}
