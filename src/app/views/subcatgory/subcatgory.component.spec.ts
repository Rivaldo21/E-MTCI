import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcatgoryComponent } from './subcatgory.component';

describe('SubcatgoryComponent', () => {
  let component: SubcatgoryComponent;
  let fixture: ComponentFixture<SubcatgoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubcatgoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcatgoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
