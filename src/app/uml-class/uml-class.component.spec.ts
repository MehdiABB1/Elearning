import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlClassComponent } from './uml-class.component';

describe('UmlClassComponent', () => {
  let component: UmlClassComponent;
  let fixture: ComponentFixture<UmlClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmlClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
