import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uml-certif',
  templateUrl: './uml-certif.component.html',
  styleUrls: ['./uml-certif.component.scss']
})
export class UmlCertifComponent implements OnInit {

  public name: string = "";
  public lastname: string = "";
  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
    this.lastname = localStorage.getItem("lastname")!;
  }

}
