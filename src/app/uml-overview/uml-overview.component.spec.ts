import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmlOverviewComponent } from './uml-overview.component';

describe('UmlOverviewComponent', () => {
  let component: UmlOverviewComponent;
  let fixture: ComponentFixture<UmlOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UmlOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UmlOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
