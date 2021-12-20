import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeformComponent } from './filmeform.component';

describe('FilmeformComponent', () => {
  let component: FilmeformComponent;
  let fixture: ComponentFixture<FilmeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmeformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
