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

    setMopidyStateListeners() : void {
        this.mopidy.on('state:online', () => {
            this.setMopidyState('online');
        });

        this.mopidy.on('state:offline', () => {
            this.setMopidyState('offline');
        });
    }

    setMopidyState(newState) : void {
        this.ngZone.run(() => {
            this.mopidyState = newState;
        });
    }

    ngOnInit() {
        this.setMopidyStateListeners();
    }

}
