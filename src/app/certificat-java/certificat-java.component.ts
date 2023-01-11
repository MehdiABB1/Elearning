import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificat-java',
  templateUrl: './certificat-java.component.html',
  styleUrls: ['./certificat-java.component.scss']
})
export class CertificatJavaComponent implements OnInit {

  public name: string = "";
  ngOnInit(): void {
    this.name = localStorage.getItem("name")!;
  }

}
