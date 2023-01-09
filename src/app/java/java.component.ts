import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.scss']
})
export class JavaComponent {
  constructor( private router: Router){}
  detailsCours(){
    this.router.navigate(['var']);
  }
}
