import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscalivroComponent } from './buscalivro.component';

describe('BuscalivroComponent', () => {
  let component: BuscalivroComponent;
  let fixture: ComponentFixture<BuscalivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscalivroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscalivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
