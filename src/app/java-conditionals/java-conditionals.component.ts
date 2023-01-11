import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-conditionals',
  templateUrl: './java-conditionals.component.html',
  styleUrls: ['./java-conditionals.component.scss']
})
export class JavaConditionalsComponent {
  constructor( private router: Router){}
  detailsCours(){
    this.router.navigate(['arrays']);
  }
}
