import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowdealersComponent } from './showdealers.component';

describe('ShowdealersComponent', () => {
  let component: ShowdealersComponent;
  let fixture: ComponentFixture<ShowdealersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowdealersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowdealersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
