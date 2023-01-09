import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, of, timer } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-quiz-java-un',
  templateUrl: './quiz-java-un.component.html',
  styleUrls: ['./quiz-java-un.component.scss']
})

@Injectable()
export class QuizJavaUnComponent implements OnInit {


  name: string = 'kdsfeds';
  email: string = 'asdas';

  questionArray : any[];
  currentQuestion: number;
  questionInterval$: any;
  counter = 50;
  isCurrentAnswer: boolean;
  selectedAnswer!: any[];
  points!: number;
  

  constructor(private router : Router) {
    this.currentQuestion = 0;
    this.isCurrentAnswer = false;
    this.questionArray = [
      {
        "questionLabel": "Q1",
        "option": [{
          "label": "date",
          "correct": true
        },
        {
          "label": "void"
        },
        {
          "label": "int"
        },
        {
          "label": "float"
        }
        ]
      },
      {
        "questionLabel": "Q2",
        "option": [{
          "label": "date",
          "correct": true
        },
        {
          "label": "void"
        },
        {
          "label": "int"
        },
        {
          "label": "float"
        }
        ]
      },
      {
        "questionLabel": "Q3",
        "option": [{
          "label": "date",
          "correct": true
        },
        {
          "label": "void"
        },
        {
          "label": "int"
        },
        {
          "label": "float"
        }
        ]
      },
    ];
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        console.log("hidden");
      } else {
        console.log("shown");
      }
    });

  }
  ngOnInit(): void {
   this.startCounter();
   setTimeout((timer: any)  => {
    this.questionInterval$.unsubscribe();
    this.router.navigate(['resulr']);
  }, 50000)
  }

  nextQuestion() {
    if (!(this.questionArray.length - 1 == this.currentQuestion)) {
      this.currentQuestion++;
      this.startCounter();
    } else {

    }
  }
  prevQuestion() {
    if (this.currentQuestion !== 0) {
      this.currentQuestion--;
    }

  }

  onSelect(question: { isAttempted: boolean; }, options: any[], option: { correct: any; isSelected: boolean; }) {
    question.isAttempted = true;
    options.forEach((element: { isSelected: boolean; }) => {
      element.isSelected = false;
    });
    this.isCurrentAnswer = true;
    if (option.correct) {
      this.points++;
    }


    option.isSelected = true;

  }



  startCounter() {
    this.counter = 50;
    // this.questionInterval$ = interval(1000).subscribe.(counter => {
    //   this.counter--;
    //   if (this.counter == 0) {
    //     this.nextQuestion();
       
    //   }console.log(counter)
    // })

  }

}
