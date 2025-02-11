import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacosSetupComponent } from './macos-setup.component';

describe('MacosSetupComponent', () => {
  let component: MacosSetupComponent;
  let fixture: ComponentFixture<MacosSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacosSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacosSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
