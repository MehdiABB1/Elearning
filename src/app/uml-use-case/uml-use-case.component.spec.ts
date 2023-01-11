import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlUseCaseComponent } from './uml-use-case.component';

describe('UmlUseCaseComponent', () => {
  let component: UmlUseCaseComponent;
  let fixture: ComponentFixture<UmlUseCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmlUseCaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlUseCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
