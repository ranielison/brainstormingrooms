import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeTrabalhoComponent } from './area-de-trabalho.component';

describe('AreaDeTrabalhoComponent', () => {
  let component: AreaDeTrabalhoComponent;
  let fixture: ComponentFixture<AreaDeTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaDeTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaDeTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
