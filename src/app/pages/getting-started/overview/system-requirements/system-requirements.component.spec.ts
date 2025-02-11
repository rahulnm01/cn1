import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRequirementsComponent } from './system-requirements.component';

describe('SystemRequirementsComponent', () => {
  let component: SystemRequirementsComponent;
  let fixture: ComponentFixture<SystemRequirementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemRequirementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
