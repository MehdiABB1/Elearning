import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-arrays',
  templateUrl: './java-arrays.component.html',
  styleUrls: ['./java-arrays.component.scss']
})
export class JavaArraysComponent {
  constructor( private router: Router){}
  detailsCours(){
    this.router.navigate(['loops']);
  }
}
