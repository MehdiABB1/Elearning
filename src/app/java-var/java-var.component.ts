import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-var',
  templateUrl: './java-var.component.html',
  styleUrls: ['./java-var.component.scss']
})
export class JavaVarComponent {
  constructor( private router: Router){}
  detailsCours(){
    this.router.navigate(['quiz']);
  }

  
}
