import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealertoshopComponent } from './dealertoshop.component';

describe('DealertoshopComponent', () => {
  let component: DealertoshopComponent;
  let fixture: ComponentFixture<DealertoshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealertoshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealertoshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
