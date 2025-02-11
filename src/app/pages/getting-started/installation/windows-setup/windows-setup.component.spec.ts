import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowsSetupComponent } from './windows-setup.component';

describe('WindowsSetupComponent', () => {
  let component: WindowsSetupComponent;
  let fixture: ComponentFixture<WindowsSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowsSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
