import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MpMoperialComponent } from './mp-moperial.component';

describe('MpMoperialComponent', () => {
  let component: MpMoperialComponent;
  let fixture: ComponentFixture<MpMoperialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MpMoperialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MpMoperialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
