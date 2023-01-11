import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-object-or',
  templateUrl: './java-object-or.component.html',
  styleUrls: ['./java-object-or.component.scss']
})
export class JavaObjectOrComponent {
  constructor( private router: Router){}
  detailsCours(){
    this.router.navigate(['loops']);
  }
}
