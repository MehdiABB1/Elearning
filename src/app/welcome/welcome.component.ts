import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
 
  @ViewChild('name') nameKey!: ElementRef;
  @ViewChild('lastname') lastnameKey!: ElementRef;
  constructor(private router:Router) {}

  ngOnInit(): void {}

  startQuiz() {
  
    localStorage.setItem('name', this.nameKey.nativeElement.value);
    localStorage.setItem('lastname', this.lastnameKey.nativeElement.value);
    this.router.navigate(['java']);

  }
}
