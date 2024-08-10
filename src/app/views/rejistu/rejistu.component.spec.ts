import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejistuComponent } from './rejistu.component';

describe('RejistuComponent', () => {
  let component: RejistuComponent;
  let fixture: ComponentFixture<RejistuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RejistuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RejistuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
