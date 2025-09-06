import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PotsSavingMicroComponent } from './pots-saving-micro.component';

describe('PotsSavingMicroComponent', () => {
  let component: PotsSavingMicroComponent;
  let fixture: ComponentFixture<PotsSavingMicroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotsSavingMicroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PotsSavingMicroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
