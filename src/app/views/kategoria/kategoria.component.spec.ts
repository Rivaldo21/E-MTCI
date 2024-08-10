import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriaComponent } from './kategoria.component';

describe('KategoriaComponent', () => {
  let component: KategoriaComponent;
  let fixture: ComponentFixture<KategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
