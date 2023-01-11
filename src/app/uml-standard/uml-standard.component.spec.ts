import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlStandardComponent } from './uml-standard.component';

describe('UmlStandardComponent', () => {
  let component: UmlStandardComponent;
  let fixture: ComponentFixture<UmlStandardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmlStandardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlStandardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
