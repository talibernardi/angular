import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaFilmeComponent } from './buscafilme.component';


describe('BuscaFilmeComponent', () => {
  let component: BuscaFilmeComponent;
  let fixture: ComponentFixture<BuscaFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaFilmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
