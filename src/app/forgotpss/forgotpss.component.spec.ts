import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotpssComponent } from './forgotpss.component';

describe('ForgotpssComponent', () => {
  let component: ForgotpssComponent;
  let fixture: ComponentFixture<ForgotpssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotpssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForgotpssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
