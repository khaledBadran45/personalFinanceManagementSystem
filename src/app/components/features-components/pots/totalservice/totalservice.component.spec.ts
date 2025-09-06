import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalserviceComponent } from './totalservice.component';

describe('TotalserviceComponent', () => {
  let component: TotalserviceComponent;
  let fixture: ComponentFixture<TotalserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
