import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-loops',
  templateUrl: './java-loops.component.html',
  styleUrls: ['./java-loops.component.scss']
})
export class JavaLoopsComponent {
  constructor( private router: Router){}
  detailsCours(){
    this.router.navigate(['string']);
  }
}
