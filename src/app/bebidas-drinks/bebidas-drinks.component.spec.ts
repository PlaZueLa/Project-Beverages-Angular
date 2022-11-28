import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasDrinksComponent } from './bebidas-drinks.component';

describe('BebidasDrinksComponent', () => {
  let component: BebidasDrinksComponent;
  let fixture: ComponentFixture<BebidasDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidasDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidasDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
