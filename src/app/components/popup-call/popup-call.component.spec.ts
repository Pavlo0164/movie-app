import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCallComponent } from './popup-call.component';

describe('PopupCallComponent', () => {
  let component: PopupCallComponent;
  let fixture: ComponentFixture<PopupCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopupCallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
