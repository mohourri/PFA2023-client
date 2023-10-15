import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesComponentComponent } from './commandes-component.component';

describe('CommandesComponentComponent', () => {
  let component: CommandesComponentComponent;
  let fixture: ComponentFixture<CommandesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
