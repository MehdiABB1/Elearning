import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatJavaComponent } from './certificat-java.component';

describe('CertificatJavaComponent', () => {
  let component: CertificatJavaComponent;
  let fixture: ComponentFixture<CertificatJavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificatJavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificatJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
