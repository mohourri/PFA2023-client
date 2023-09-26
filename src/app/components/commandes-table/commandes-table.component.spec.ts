import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesTableComponent } from './commandes-table.component';

describe('CommandesTableComponent', () => {
  let component: CommandesTableComponent;
  let fixture: ComponentFixture<CommandesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
