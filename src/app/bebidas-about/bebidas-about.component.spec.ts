import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasAboutComponent } from './bebidas-about.component';

describe('BebidasAboutComponent', () => {
  let component: BebidasAboutComponent;
  let fixture: ComponentFixture<BebidasAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BebidasAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BebidasAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
