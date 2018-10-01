import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntraremsalaComponent } from './entraremsala.component';

describe('EntraremsalaComponent', () => {
  let component: EntraremsalaComponent;
  let fixture: ComponentFixture<EntraremsalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntraremsalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntraremsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
