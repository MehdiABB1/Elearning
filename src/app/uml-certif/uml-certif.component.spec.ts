import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlCertifComponent } from './uml-certif.component';

describe('UmlCertifComponent', () => {
  let component: UmlCertifComponent;
  let fixture: ComponentFixture<UmlCertifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmlCertifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlCertifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
