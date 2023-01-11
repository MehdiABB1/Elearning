import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaLoopsComponent } from './java-loops.component';

describe('JavaLoopsComponent', () => {
  let component: JavaLoopsComponent;
  let fixture: ComponentFixture<JavaLoopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaLoopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaLoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
