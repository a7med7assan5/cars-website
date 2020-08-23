import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { carsPage } from './cars.page';

describe('carsPage', () => {
  let component: carsPage;
  let fixture: ComponentFixture<carsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ carsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(carsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
