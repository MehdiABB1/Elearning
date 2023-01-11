import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-java-detail',
  templateUrl: './java-detail.component.html',
  styleUrls: ['./java-detail.component.scss']
})
export class JavaDetailComponent {
  constructor( private router: Router){}
  detailsCours(){
    this.router.navigate(['welcome']);
  }
}
