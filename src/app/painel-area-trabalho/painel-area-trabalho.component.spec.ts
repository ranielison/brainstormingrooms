import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelAreaTrabalhoComponent } from './painel-area-trabalho.component';

describe('PainelAreaTrabalhoComponent', () => {
  let component: PainelAreaTrabalhoComponent;
  let fixture: ComponentFixture<PainelAreaTrabalhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelAreaTrabalhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelAreaTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
