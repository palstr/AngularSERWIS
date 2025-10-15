import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarscheckComponent } from './carscheck.component';

describe('CarscheckComponent', () => {
  let component: CarscheckComponent;
  let fixture: ComponentFixture<CarscheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarscheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarscheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
