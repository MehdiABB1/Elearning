import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaVarComponent } from './java-var.component';

describe('JavaVarComponent', () => {
  let component: JavaVarComponent;
  let fixture: ComponentFixture<JavaVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaVarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaVarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
