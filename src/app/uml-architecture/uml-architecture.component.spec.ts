import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlArchitectureComponent } from './uml-architecture.component';

describe('UmlArchitectureComponent', () => {
  let component: UmlArchitectureComponent;
  let fixture: ComponentFixture<UmlArchitectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmlArchitectureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlArchitectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
