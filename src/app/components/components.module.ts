import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MpControlsComponent } from './mp-controls/mp-controls.component';
import { MpMoperialComponent } from './mp-moperial/mp-moperial.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
      MpMoperialComponent
  ],
  declarations: [MpControlsComponent, MpMoperialComponent]
})
export class ComponentsModule { }
