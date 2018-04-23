import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealItemEditComponent } from './meal-item-edit.component';

describe('MealItemEditComponent', () => {
  let component: MealItemEditComponent;
  let fixture: ComponentFixture<MealItemEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealItemEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealItemEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
