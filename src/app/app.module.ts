import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';

/*
    START MOPIDY INIT
*/
import Mopidy from 'mopidy';

const mopidy = new Mopidy({
    webSocketUrl: 'ws://localhost:6680/mopidy/ws',
});

// Make instance available through developer console
(<any>window).mopidy = mopidy;
/*
    END MOPIDY INIT
*/

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ComponentsModule,
        MaterialModule
    ],
    providers: [
        { provide: 'Mopidy', useValue: mopidy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
