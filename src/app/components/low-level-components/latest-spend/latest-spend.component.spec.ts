import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSpendComponent } from './latest-spend.component';

describe('LatestSpendComponent', () => {
  let component: LatestSpendComponent;
  let fixture: ComponentFixture<LatestSpendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LatestSpendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestSpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
