import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerhomeComponent } from './dealerhome.component';

describe('DealerhomeComponent', () => {
  let component: DealerhomeComponent;
  let fixture: ComponentFixture<DealerhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
