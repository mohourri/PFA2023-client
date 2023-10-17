import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FournisseursTableComponent } from './fournisseurs-table.component';

describe('FournisseursTableComponent', () => {
  let component: FournisseursTableComponent;
  let fixture: ComponentFixture<FournisseursTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FournisseursTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FournisseursTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
