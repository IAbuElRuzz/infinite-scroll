import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListviewRowComponent } from './listview-row.component';

describe('ListviewRowComponent', () => {
  let component: ListviewRowComponent;
  let fixture: ComponentFixture<ListviewRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListviewRowComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListviewRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
