import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTitleComponent } from './p-title.component';

describe('PTitleComponent', () => {
  let component: PTitleComponent;
  let fixture: ComponentFixture<PTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
