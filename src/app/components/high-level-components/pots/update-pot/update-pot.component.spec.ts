import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePotComponent } from './update-pot.component';

describe('UpdatePotComponent', () => {
  let component: UpdatePotComponent;
  let fixture: ComponentFixture<UpdatePotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatePotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
