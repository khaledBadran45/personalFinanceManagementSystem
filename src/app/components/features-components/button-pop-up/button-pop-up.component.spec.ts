import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPopUpComponent } from './button-pop-up.component';

describe('ButtonPopUpComponent', () => {
  let component: ButtonPopUpComponent;
  let fixture: ComponentFixture<ButtonPopUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPopUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
