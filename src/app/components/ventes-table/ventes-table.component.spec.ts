import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentesTableComponent } from './ventes-table.component';

describe('VentesTableComponent', () => {
  let component: VentesTableComponent;
  let fixture: ComponentFixture<VentesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
