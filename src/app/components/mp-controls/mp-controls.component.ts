import { Component, OnInit, Inject } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'mp-controls',
  templateUrl: './mp-controls.component.html',
  styleUrls: ['./mp-controls.component.scss']
})
export class MpControlsComponent implements OnInit {
  constructor(@Inject('Mopidy') private mopidy) { }

  isPlaying(): Observable<String> {
      return from(this.mopidy.playback.getState());
  }

  pause() {
      this.mopidy.playback.pause();
  }

  resume() {
      this.mopidy.playback.resume();
  }

  togglePause() {
      this.isPlaying().subscribe((result: String) => {
          if (result === 'paused') {
              this.resume();
          } else {
              this.pause();
          }
      });
  }

  ngOnInit() {
  }

}
