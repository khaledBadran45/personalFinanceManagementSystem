import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FigureIllustrativeComponent } from './figure-illustrative.component';

describe('FigureIllustrativeComponent', () => {
  let component: FigureIllustrativeComponent;
  let fixture: ComponentFixture<FigureIllustrativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FigureIllustrativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FigureIllustrativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
