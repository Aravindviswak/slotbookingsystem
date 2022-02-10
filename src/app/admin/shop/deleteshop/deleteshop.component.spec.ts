import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteshopComponent } from './deleteshop.component';

describe('DeleteshopComponent', () => {
  let component: DeleteshopComponent;
  let fixture: ComponentFixture<DeleteshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
