import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaArraysComponent } from './java-arrays.component';

describe('JavaArraysComponent', () => {
  let component: JavaArraysComponent;
  let fixture: ComponentFixture<JavaArraysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaArraysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaArraysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
