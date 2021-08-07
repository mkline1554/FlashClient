import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContactInformationComponent } from './register-contact-information.component';

describe('RegisterContactInformationComponent', () => {
  let component: RegisterContactInformationComponent;
  let fixture: ComponentFixture<RegisterContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterContactInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
