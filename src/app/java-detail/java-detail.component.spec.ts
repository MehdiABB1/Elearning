import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaDetailComponent } from './java-detail.component';

describe('JavaDetailComponent', () => {
  let component: JavaDetailComponent;
  let fixture: ComponentFixture<JavaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
