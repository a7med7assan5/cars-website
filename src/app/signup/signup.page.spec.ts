import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { signupPage } from './signup.page';

describe('signupPage', () => {
  let component: signupPage;
  let fixture: ComponentFixture<signupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [signupPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(signupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
