import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryChipComponent } from './subcategory-chip.component';

describe('SubcategoryChipComponent', () => {
  let component: SubcategoryChipComponent;
  let fixture: ComponentFixture<SubcategoryChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubcategoryChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcategoryChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
