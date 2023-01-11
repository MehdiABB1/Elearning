import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizUmlComponent } from './quiz-uml.component';

describe('QuizUmlComponent', () => {
  let component: QuizUmlComponent;
  let fixture: ComponentFixture<QuizUmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizUmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizUmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
