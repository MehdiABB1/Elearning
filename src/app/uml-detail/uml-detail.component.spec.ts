import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlDetailComponent } from './uml-detail.component';

describe('UmlDetailComponent', () => {
  let component: UmlDetailComponent;
  let fixture: ComponentFixture<UmlDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmlDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
