import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingWallComponent } from './gaming-wall.component';

describe('GamingWallComponent', () => {
  let component: GamingWallComponent;
  let fixture: ComponentFixture<GamingWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
