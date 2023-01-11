import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaConditionalsComponent } from './java-conditionals.component';

describe('JavaConditionalsComponent', () => {
  let component: JavaConditionalsComponent;
  let fixture: ComponentFixture<JavaConditionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaConditionalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaConditionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
