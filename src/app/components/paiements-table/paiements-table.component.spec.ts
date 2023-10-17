import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementsTableComponent } from './paiements-table.component';

describe('PaiementsTableComponent', () => {
  let component: PaiementsTableComponent;
  let fixture: ComponentFixture<PaiementsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaiementsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
