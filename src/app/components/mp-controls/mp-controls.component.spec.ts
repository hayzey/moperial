import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpControlsComponent } from './mp-controls.component';

describe('MpControlsComponent', () => {
  let component: MpControlsComponent;
  let fixture: ComponentFixture<MpControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
