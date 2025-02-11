import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinuxSetupComponent } from './linux-setup.component';

describe('LinuxSetupComponent', () => {
  let component: LinuxSetupComponent;
  let fixture: ComponentFixture<LinuxSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinuxSetupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinuxSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
