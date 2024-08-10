import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanypfeComponent } from './companypfe.component';

describe('CompanypfeComponent', () => {
  let component: CompanypfeComponent;
  let fixture: ComponentFixture<CompanypfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanypfeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompanypfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
