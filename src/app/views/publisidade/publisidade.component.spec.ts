import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisidadeComponent } from './publisidade.component';

describe('PublisidadeComponent', () => {
  let component: PublisidadeComponent;
  let fixture: ComponentFixture<PublisidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublisidadeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PublisidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
