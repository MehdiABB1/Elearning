import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizJavaUnComponent } from './quiz-java-un.component';

describe('QuizJavaUnComponent', () => {
  let component: QuizJavaUnComponent;
  let fixture: ComponentFixture<QuizJavaUnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizJavaUnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizJavaUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
