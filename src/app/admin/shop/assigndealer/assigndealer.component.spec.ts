import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigndealerComponent } from './assigndealer.component';

describe('AssigndealerComponent', () => {
  let component: AssigndealerComponent;
  let fixture: ComponentFixture<AssigndealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigndealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigndealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
