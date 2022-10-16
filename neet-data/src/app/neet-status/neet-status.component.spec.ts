import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeetStatusComponent } from './neet-status.component';

describe('NeetStatusComponent', () => {
  let component: NeetStatusComponent;
  let fixture: ComponentFixture<NeetStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeetStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeetStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
