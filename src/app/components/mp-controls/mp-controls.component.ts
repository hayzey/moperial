import { Component, OnInit, Inject, NgZone } from '@angular/core';
import { Observable, from } from 'rxjs';

@Component({
    selector: 'mp-controls',
    templateUrl: './mp-controls.component.html',
    styleUrls: ['./mp-controls.component.scss']
})
export class MpControlsComponent implements OnInit {
    public playbackState: String = 'stopped';
    public timeUntilTrackLocks : Number = 3000;

    constructor(@Inject('Mopidy') private mopidy, private ngZone: NgZone) {}

    play() {
        this.mopidy.playback.play();
    }

    pause() {
        this.mopidy.playback.pause();
    }

    resume() {
        this.mopidy.playback.resume();
    }

    togglePlayback() {
        let playing = this.playbackState;

        if (playing === 'playing') {
            this.pause();
        } else if (playing === 'paused') {
            this.resume();
        } else if (playing === 'stopped') {
            this.play();
        }
    }

    next() {
        this.mopidy.playback.next();
    }

    previous() {
        this.mopidy.playback.previous();
    }

    getPlaybackPosition(): Observable<Number> {
        return from(this.mopidy.playback.getTimePosition());
    }

    previousOrRestart() {
        this.getPlaybackPosition().toPromise().then((playbackPosition) => {
            if (playbackPosition < this.timeUntilTrackLocks) {
                this.previous();
            } else {
                this.play();
            }
        });
    }

    getPlaybackState(): Observable<String> {
        return from(this.mopidy.playback.getState());
    }

    setPlaybackState() {
        this.getPlaybackState().subscribe((result: String) => {
            this.ngZone.run(() => {
                this.playbackState = result;
            });
        });
    }

    setPlaybackStateListener() {
        this.mopidy.on('event:playbackStateChanged', (data) => {
            this.ngZone.run(() => {
                this.playbackState = data.new_state;
            });
        });
    }

    ngOnInit() {
        this.setPlaybackStateListener();
        this.setPlaybackState();

        this.getPlaybackPosition().subscribe({
            next: (data) => {
                console.log('ayy lmao', data, this.mopidy);
            },
            error: (err) => {
                console.log('err', err);
            }
        });
        // .error((err) => {
        //     console.log('what');
        //     console.log('err', err);
        // })
    }

}
