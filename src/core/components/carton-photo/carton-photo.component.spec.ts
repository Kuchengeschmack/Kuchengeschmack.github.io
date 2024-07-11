import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartonPhotoComponent } from './carton-photo.component';

describe('CartonPhotoComponent', () => {
  let component: CartonPhotoComponent;
  let fixture: ComponentFixture<CartonPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartonPhotoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CartonPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
