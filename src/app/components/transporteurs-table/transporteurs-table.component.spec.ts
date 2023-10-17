import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransporteursTableComponent } from './transporteurs-table.component';

describe('TransporteursTableComponent', () => {
  let component: TransporteursTableComponent;
  let fixture: ComponentFixture<TransporteursTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransporteursTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransporteursTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
