import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivagesTableComponent } from './arrivages-table.component';

describe('ArrivagesTableComponent', () => {
  let component: ArrivagesTableComponent;
  let fixture: ComponentFixture<ArrivagesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivagesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrivagesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
