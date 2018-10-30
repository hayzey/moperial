import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import Mopidy from 'mopidy';

import { AppComponent } from './app.component';

const mopidy = new Mopidy({
    webSocketUrl: 'ws://localhost:6680/mopidy/ws',
});

// Make instance available through developer console
(<any>window).mopidy = mopidy;

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        { provide: 'Mopidy', useValue: mopidy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
