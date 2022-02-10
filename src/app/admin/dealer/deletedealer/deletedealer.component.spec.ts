import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedealerComponent } from './deletedealer.component';

describe('DeletedealerComponent', () => {
  let component: DeletedealerComponent;
  let fixture: ComponentFixture<DeletedealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletedealerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
