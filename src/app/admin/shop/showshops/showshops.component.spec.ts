import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowshopsComponent } from './showshops.component';

describe('ShowshopsComponent', () => {
  let component: ShowshopsComponent;
  let fixture: ComponentFixture<ShowshopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowshopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
