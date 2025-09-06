import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotFormComponent } from './pot-form.component';

describe('PotFormComponent', () => {
  let component: PotFormComponent;
  let fixture: ComponentFixture<PotFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
