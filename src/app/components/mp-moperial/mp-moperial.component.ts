import { Component, OnInit, Inject, NgZone } from '@angular/core';

@Component({
    selector: 'mp-moperial',
    templateUrl: './mp-moperial.component.html',
    styleUrls: ['./mp-moperial.component.scss']
})
export class MpMoperialComponent implements OnInit {
    public mopidyState : String = 'offline';

    constructor(@Inject('Mopidy') private mopidy, private ngZone: NgZone) { }

    isOnline() : Boolean {
        return this.mopidyState === 'online';
    }

    setMopidyListeners() : void {
        this.mopidy.on('state:online', () => {
            this.setMopidyState('online');
        });

        this.mopidy.on('state:offline', () => {
            this.setMopidyState('offline');
        });

        this.mopidy.on('core.playback.get_time_position', (data) => {
            console.log('time position', data);
            // this.setMopidyState('online');
        });
    }

    setMopidyState(newState) : void {
        this.ngZone.run(() => {
            this.mopidyState = newState;
        });
    }

    ngOnInit() {
        this.setMopidyListeners();
    }

}
